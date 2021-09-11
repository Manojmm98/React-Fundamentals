import React, { Component } from 'react'

class ClickCounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
        }
    }
    handleClick=() => {
        this.setState(
           (prevState)=>{
               return {count: prevState.count+1}
           }
        )
    }

    
    
    render() {
        return (
            <div>
                
                 <h1>clicked {this.state.count} times</h1>
               <button onClick={this.handleClick}>click</button> 
            </div>
        )
    }
}

export default ClickCounter
