import React from 'react'
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function RedirectDemo() {
    return (
        <div >
            <h1>Router</h1>
            <Router>
                <Switch>
{/* <Link to="/Home">Home</Link>
                <br/>
                 <Link to="/About">About</Link>
                 <Route path="/Home"><Home/></Route>
                 <Route exact path="/About"><About/></Route> */}
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
       
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
       <Route path="/Home"><Home/></Route>
                
                  <Route path="/Login"><Login/></Route>
                </Switch>
                
                 
            </Router>
        </div>
    )
}




export default RedirectDemo;
