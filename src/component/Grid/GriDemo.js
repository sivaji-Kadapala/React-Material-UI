import React from 'react'
import {Grid}from '@material-ui/core'
function GriDemo() {
    return (
        <Grid item lg={12} container spacing={2}>
            
             <h1>Material-UI|Grid</h1>
                 <br/>
             <Grid item lg={3}>
                 <h1  style={{backgroundColor:"cyan"}} xs={12}>Block-1</h1>
             </Grid>
              <Grid item lg={3}>
                 <h1  style={{backgroundColor:"cyan"}} xs={12}>Block-2</h1>
             </Grid>
             <Grid item lg={3}>
                 <h1  style={{backgroundColor:"cyan"}} xs={12}>Block-3<hidden></hidden></h1>
             </Grid>
              <Grid item lg={3}>
                 <h1  style={{backgroundColor:"cyan"}} xs={12}>Block-4</h1>
             </Grid>
        </Grid>
           

      
    )
}

export default GriDemo
