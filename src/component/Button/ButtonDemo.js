import React, { useState } from 'react';

// import {Button} from '@material-ui/core'
// import Button from '@material-ui/core/Button'
import {Button, ButtonGroup }from '@material-ui/core'
import {Add} from '@material-ui/icons'
function ButtonDemo() {
  //Using useState hook to change the button color
  // const [col,setColor]=useState('secondary');
  const [btnDisable,setBtnDisable]=useState(false);//useState default value is false
  function CustomMe(){
    //setColor('primary')
    setBtnDisable(true)
  }
  return (
    <div className="App">
     
     Buttons
     <button>Normal button</button>
     <Button>UI Button</Button>
     <Button variant="contained">Default</Button>
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" color="primary" href="#contained-buttons">
  Link
</Button>
{/* Full colored button */}
<h2>Full colored button</h2>
<Button 
variant="contained"
color="primary">Click ME</Button>
{/* Outlined button */}
<h2>Outlined button </h2>
<Button 
variant="outlined"
color="secondary">Click ME</Button>
{/* function with button */}
<h2>function with button</h2>
<Button 
variant="outlined"
onClick={()=>alert("Hell Sivaji !,Welcome to the React world !")}
color="secondary">Click ME</Button>
{/* another function using that function is converted outlined to contined*/}
<h2> another function using that function is converted outlined to contined</h2>
<Button 
variant="contained"
size="large"
color="secondary"
disabled={btnDisable}
onClick={()=>CustomMe()}
startIcon={<Add/>}
>Click ME</Button>
{/* Button Group */}
<h2>Button Group</h2>
<ButtonGroup color="primary"  orientation="vertical"  variant="contained">
  <Button >one</Button>
<Button >Two</Button>
<Button>Three</Button>
</ButtonGroup>
    </div>
  );
}

export default ButtonDemo;
