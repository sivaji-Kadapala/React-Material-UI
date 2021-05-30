import React from 'react'
import {Container}from '@material-ui/core'
function LayoutContainer() {
    return (
        <div>
            <Container maxWidth="md" style={{backgroundColor:"cyan"}}>
                <h1>Material-UI|Layout Container</h1>

            </Container>
             <Container maxWidth="sm" style={{backgroundColor:"cyan"}}>
                <h2>Sivaji</h2>

            </Container>
             <Container maxWidth="Xs" style={{backgroundColor:"cyan"}}>
                <h2>Siva</h2>

            </Container>

             <Container fixed maxWidth="lg" style={{backgroundColor:"cyan"}}>
                <h2>syam | fixed</h2>

            </Container>
            
        </div>
    )
}

export default LayoutContainer
