import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    //arrow function is anfn
    incrementCount=(params) => {
        //setstate using shortcut ss
        this.setState({ count:this.state.count+1  });
        
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>count {this.state.count}</button>
            </div>
        )
    }
}
