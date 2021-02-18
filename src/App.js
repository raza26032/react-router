import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./components/login/login.jsx"
import Signup from "./components/signup/signup.jsx"
import Dashboard from "./components/dashboard/dashboard.jsx"


function App() {
  return (
    <div>
      <Router>
          <img src={('https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png')} />
        <div className="App">
        <input type="search" id="header-search-bar" name="q" placeholder="Search" value=""></input>
          <nav className="nav">
            <Link to="/" className="one">login</Link>
            <Link to="/signup" className="two">Signup</Link>
            <Link to="/dashboard" className="three">Dashboard</Link>
          </nav>
        </div>


        <Switch>


          <Route exact={true} path="/">
            <Login />
          </Route>


          <Route path="/dashboard">
            <Dashboard />
          </Route>


          <Route path="/signup">
            <Signup />
          </Route>




        </Switch>
      </Router>
    </div>
  );
}

export default App;