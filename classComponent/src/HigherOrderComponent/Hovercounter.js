import React, { Component } from 'react'

export class Hovercounter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
        }
    }

    handleMouse=()=>{
        this.setState((prevState)=>{
         return   {count:prevState.count+1}
        })
    }
    
    render(props) {
        return (
            <div>
             <h1>Hovered {this.state.count} times </h1>
             <button onMouseOver={this.handleMouse}>Hover Here</button>
            </div>
        )
    }
}

export default Hovercounter
