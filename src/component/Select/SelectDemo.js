import React, { useState } from 'react';
import {Select ,MenuItem}from '@material-ui/core'
function SelectDemo() {
    const [course, setCourse] = useState(3)
    const updateSelectVal=(e)=>{
        console.log(e.target.value);
        setCourse(e.target.value)
    }
    return (
        <div>
            <h1>Material-UI|Select<Select/></h1>
            <Select value={course} 
            displayEmpty
            onChange={updateSelectVal}>
                
                <MenuItem value={1}>
                Node</MenuItem>
                 <MenuItem value={2}>
                React</MenuItem>
                 <MenuItem value={3}>
                Js</MenuItem>
                 <MenuItem value={4}>
                Html,css</MenuItem>
            </Select>

        </div>
    )
}

export default SelectDemo
