import React from 'react'
import {Slider }from '@material-ui/core'
function SliderDemo() {
    const mark=[
        {
            value:0,
            label:"start"
        },
         {
            value:100,
            label:"middle"
        },
         {
            value:200,
            label:"End"
        }
    ]
    const getValue=(e,val)=>{
        console.log(val);
    }
    return (
        <div>
            <h1>Material-UI|Slider<Slider/></h1>
            <div style={{height:300,margin:30}}>
                <Slider color="secondary"
                defaultValue={50}
                max={200}
                step={20}
                marks={mark}
                valueLabelDisplay="auto"
                onChange={getValue}
                orientation="vertical"/>
            </div>
        </div>
    )
}

export default SliderDemo
