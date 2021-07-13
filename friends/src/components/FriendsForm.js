import React, { useState } from "react"


import axiosWithAuth from "../helpers/axiosWithAuth"

const FriendsForm = (props) => {

//  console.log(props)

  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: ""
  })
  // console.log(formValues)
  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  
  // We need the function that setFriends from application state. This is passed in via the prop setFriendsList, then referenced in handleSubmit to add the new friend to our list
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth().post("/friends", formValues)
      .then(res => {
        console.log(res)
        props.setFriendsList(res.data)
        setFormValues({
          name: "",
          age: "",
          email: ""
        })
  
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="age"
          value={formValues.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <button>Add a Friend</button>
      </form>
    </div>
  )
}

export default FriendsForm;