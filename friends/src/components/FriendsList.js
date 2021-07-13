import React, { useState, useEffect}  from 'react';

import FriendsForm from './FriendsForm'
import axiosWithAuth from '../helpers/axiosWithAuth';

const FriendsList = () => {

const [friendsList, setFriendsList] = useState([])

useEffect(() =>{
  axiosWithAuth().get("/friends")
    .then(res => {
      console.log(res.data)
      setFriendsList(res.data)
    })
    .catch(err => console.log(err));
},[]); 

  return(
    <div>
      <h2>Your Friends</h2>
      {friendsList.map(friend => (
        <div key={friend.id}>
          <p>{friend.name}</p>
        </div>
      ))}
      <FriendsForm friends={friendsList} setFriendsList={setFriendsList}/>
    </div>
  )
};

export default FriendsList;