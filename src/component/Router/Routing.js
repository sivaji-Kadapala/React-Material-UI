import React from 'react'
import {BrowserRouter as Router,Link,Route,useHistory} from 'react-router-dom';

function Routing() {
    return (
        <div >
            <Router>
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
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
       <Route path="/Home"><Home/></Route>
                 <Route path="/About"><About/></Route>
                  <Route path="/Login"><Login/></Route>
                  <Route   exact path="/Contact"><Contact/></Route>
            </Router>
        </div>
    )
}

function Home() {
    return (
        <div >
            <h1>Home</h1>
            <p>This is home page</p>
        </div>
    )
}
function About() {
    return (
        <div >
            <h1>About</h1>
            <p> this is about page</p>
        </div>
    )
}
function Contact() {
    return (
        <div >
            <h1>Contact</h1>
            <p> This is Contact page</p>

        </div>
    )
}
function Login() {
    let history=useHistory();
    history.push('/Home')
    return (
        <div >
            <h1>Login</h1>
            <p> This is Login page</p>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button onClick={()=>{history.push('/Home')}}>Login</button>
        </div>
    )
}

export default Routing
