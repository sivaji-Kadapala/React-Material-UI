import React, { useState } from 'react';
import {Radio}from '@material-ui/core'
function RadioButtonDemo() {
    const [gender,setGender] = useState("male")
    const handleGender=(e)=>{
        console.log("Function called");
        console.log(e.target.value);
        setGender(e.target.value)
    }
    return (
        <div>
            <h1>Material-UI|Radio Button<Radio/></h1>
            <div>
                <span>Male</span>
                <Radio value="male"  
                 checked={gender==="male"} 
                color="primary" onChange={handleGender}/>
            </div>
             <div>
                <span>FeMale</span>
                <Radio value="female"  
                 checked={gender==="female"} 
                color="primary" onChange={handleGender}/>
            </div>
            <div>
                <span>Other</span>
                <Radio value="other"  
                 checked={gender==="other"} 
                color="primary" onChange={handleGender}/>
            </div>
        </div>
    )
}

export default RadioButtonDemo
