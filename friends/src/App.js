import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Login from './components/Login'
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {

  // Logout function
  const handleLogout = () =>{
    localStorage.removeItem('token');
    console.log("Logged out.")
  }


  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
          <li>
            <Link to="/protected">Your Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login}></Route>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
