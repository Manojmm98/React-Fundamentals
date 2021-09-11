import React, { Component } from 'react'



export class BindHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        
    }
    // the main acceptable approach is define the function in arrow function syntax
      handleClick =()=>{
          this.setState({
              message:'Bye'
            })
      }
   
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                 {/* one way of channging the state is of binding this in the function  but it is not a good approch*/}
                {/* <button onClick={this.handleClick.bind(this)}>click</button> */}
                {/* another way of declareing is define the function in arrow function syntax  it is also not a good approch*/}
                {/* <button onClick={()=>this.handleClick()}>click</button> */}
                <button onClick={this.handleClick}>click</button> 
            </div>
        )
    }
}

export default BindHandler
