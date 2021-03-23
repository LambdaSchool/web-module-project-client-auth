import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {Friend} from './Friend';


 class FriendsList extends React.Component {
     state = {
         friends: []
     };

     componentDidMount() {
         this.getData();
     }

     getData = () => {
         axiosWithAuth()
         .get('/api/friends')
         .then(res => {
             this.setState({friends: res.data})
         })
         .catch(err => {
             console.log(err.response)
         })
     }

    render(){
        return (
            <div>
                <div className='friend'>
                    {
                        this.state.friends.map(friend => 
                            <Friend key={friend.id} friend={friend} />
                        )
                    }
                </div>
            </div>
        );
    }
};

export default FriendsList