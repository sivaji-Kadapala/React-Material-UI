import React, { PureComponent } from 'react'

 class PureComponentDemo extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }
    componentDidMount() {
        setInterval(() => {
          console.log("Interval invoked");  
          this.setState({ 
              counter:0  });
        },2000);
    }
    render() {
        console.log("Render Invoked");
        return <h1>current counter:{this.state.counter}</h1>
    }
}

export default PureComponentDemo
