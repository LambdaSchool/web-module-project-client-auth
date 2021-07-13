import React, { useState }from 'react';
import axios from 'axios';

const Login = (props) => {

  // console.log(props)

  const [credentials, setCredentials] = useState({
      username: '',
      password: '',
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value 
    })
  }

  const handleLogin = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload)
        console.log("Logged In!")
        props.history.push("/protected")
      })
      .catch(err =>console.log("Please input the correct credentials", err))
  }

    return(
        <div>
            <form onSubmit={handleLogin}>
                <input 
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}  
                />
                <input 
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}  
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;