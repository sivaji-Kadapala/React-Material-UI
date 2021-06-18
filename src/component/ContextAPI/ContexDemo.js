import React, { Component } from 'react'
import { ThemeContext } from './Context'
import User from './User'

export default class ContexDemo extends Component {
    constructor() {
        super()
    
        this.state = {
             theme:"no theme is applied"
        }
    }
    
    render() {
        return (
            <div>
                  <h1> Sivaji kadapala</h1>
                  <button onClick={() =>{this.setState({ theme:"gray theme is applied"  }) 
                      
                  }}>Change value </button>
                <ThemeContext.Provider value={this.state.theme}> 
                <User/>
                </ThemeContext.Provider>
            </div>
        )
    }
}
