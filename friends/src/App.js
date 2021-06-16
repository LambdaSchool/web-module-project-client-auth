import React from "react";
import "./App.css";
import LoginForm from "./loginForm";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FriendsList from "./friendsList";

// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/friendsList" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
