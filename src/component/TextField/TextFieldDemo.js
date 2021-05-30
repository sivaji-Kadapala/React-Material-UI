import React from 'react'
import {TextField}from '@material-ui/core'
function TextFieldDemo() {
    const getData=(e)=>{
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Material-UI|Text Field(WithOut Using Props)<TextField/></h1>
            <TextField
            label="Enter Name"
            color="secondary"
            variant="outlined"
            // multiline
            // fullWidth
            // type="password"
            onChange={getData}
            />
        </div>
    )
}

export default TextFieldDemo
