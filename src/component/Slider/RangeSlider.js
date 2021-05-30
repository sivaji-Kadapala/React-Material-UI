import React, { useState } from 'react';
import {Slider }from '@material-ui/core'
function RangeSlider() {
    const [val, setval] = useState(30,40)
    const updateRange=(e,data)=>{
setval(data)
    }
    return (
        <div>
            <h1>Material-UI|Range Slider</h1>
            <div style={{width:300,margin:30}}>
                <Slider color="secondary"
                
                value={val}
               
                onChange={updateRange}
               />
            </div>
        </div>
    )
}

export default RangeSlider
