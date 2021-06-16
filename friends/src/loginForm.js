import axios from "axios";
import React, { useState } from "react";

function LoginForm(props) {
  console.log("this is props", props);
  const [state, setState] = useState({
    credentials: {
      username: "Lambda",
      password: "School",
    },
  });
  console.log(state);

  const [isloading, setIsLoading] = useState(true); ///where do i put this in my axios call?

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        console.log("this is the axios res", res);
        setIsLoading(false);
        props.history.push("/friendsList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <div>
      <form onSubmit={login}>
        <h1>Here is the Login Page</h1>
        <input type="text" name="username" value={state.credentials.username} onChange={handleChange} />
        <input type="password" name="password" value={state.credentials.password} onChange={handleChange} />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
