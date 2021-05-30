
import {Checkbox }from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import React, { useState } from 'react';
function CheckBoxDemo() {
    //using useState for new value
    const [name,setName]=useState([])
    //define the function here
    const getValue=(e)=>{
        let data=name;
        data.push(e.target.value)
        setName(data)
        
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Material-UI|Checkbox<Checkbox color="primary"></Checkbox></h1>
            
            <h2>Onchanging value</h2>
            
            <Checkbox color="primary" value="sivaji" onChange={(e)=>getValue(e)}/>
            <h2>Multiple CheckBoxes with different values
            </h2>
            <Checkbox color="primary" value="sivaji" onChange={(e)=>getValue(e)}/>
            <Checkbox color="primary" value="siva" onChange={(e)=>getValue(e)}/>
             <Checkbox color="primary" value="sreenu" onChange={(e)=>getValue(e)}/>
             <h2>indeterminate and favourite</h2>
             <Checkbox color="primary" value="sivaji" onChange={(e)=>getValue(e)}/>
            <Checkbox color="primary" value="siva"  icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
            <Checkbox color="primary" value="sita" indeterminate onChange={(e)=>getValue(e)}/>
        </div>
    )
}

export default CheckBoxDemo
