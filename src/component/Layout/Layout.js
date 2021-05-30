
import React from 'react'
import {Box,Button}from '@material-ui/core'
function Layout() {
    return (
        <div>
            <h1>Material-UI|Layout</h1>
           <Box clone style={{color:"red"}}  m={30}>
                <Button>Click Me</Button>
           </Box>
        </div>
    )
}

export default Layout
