import React, { Component } from 'react'

export default class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
         username:''
    }
}
//anfn
handleChange=(event) => {
    //ssf
    this.setState( 
        { username:event.target.value }
    );
}
    render() {
        return (
            <div>
                <form>
        <h1>Hello{this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          onChange={this.handleChange}
        />
      </form>
            </div>
        )
    }
}
