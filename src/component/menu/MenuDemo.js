import React from 'react'
import {Menu,MenuItem,Button}from '@material-ui/core'
import {Link,Route,BrowserRouter as Router} from'react-router-dom';
function MenuDemo() {
    //Define state
    const [menu, setmenu] = React.useState(null)
    const HandleMenu=()=>{
        setmenu(true)
    }
    const close=()=>{
         setmenu(false)
    }
    
    return (
        <Router>

            <h1>Material-UI|Menu</h1>
            <Button onClick={HandleMenu}>Open Menus</Button>
            <Menu open={menu} onClose={close}>
                <MenuItem onClick={close}><Link to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={close}><Link to="/about">About</Link>
                </MenuItem>
                <MenuItem onClick={close}><Link to="/contact">Contact</Link>
                </MenuItem>
            </Menu>

       <Route  exact path="/"><Home/></Route>
        <Route  path="/about"><About/></Route>
         <Route  path="/contact"><Contact/></Route>
        </Router>
        
    )
}
function Home(){
    return(
        <h1>Home Page</h1>
    )
}
function Contact(){
    return(
        <h1>Contact Page</h1>
    )
}
function About(){
    return(
        <h1>ABout Page</h1>
    )
}

export default MenuDemo
