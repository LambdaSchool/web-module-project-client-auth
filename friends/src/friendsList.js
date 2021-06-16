import axios from "axios";
import React, { useState } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";

function FriendsList() {
  const [friendsState, setFriendState] = useState([]);

  const getFriends = (e) => {
    axiosWithAuth();
    axios
      .get("/api/friends")
      .then((res) => {
        console.log("getfriends axios", res);
        setFriendState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getFriends();
  return (
    <div>
      <h1>this is the friendslist</h1>
    </div>
  );
}
export default FriendsList;
