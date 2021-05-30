import React from 'react'
import {Switch}from '@material-ui/core'

function SwitchDemo() {
    const getVal=(e,val)=>{
        console.log(val);
    }
    return (
        <div>
            <h1>Material-UI|Switch<Switch/></h1>
            <Switch color="primary"
            size="large"
            onChange={getVal}
            />
           
        </div>
    )
}

export default SwitchDemo
