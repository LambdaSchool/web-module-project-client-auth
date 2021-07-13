import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  if(localStorage.getItem("token")) {
    return (
      <Route {...props} />
    )
  }
  return (
    <Redirect to="/login" />
  )
}

export default PrivateRoute