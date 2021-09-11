import React, { Component } from 'react'

export class ConRendering extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true,
        }
    }

    // --> 1st method of conditional rendering is the if else block we have to define the return statment inside if and else block according to our condition
    // --> 2nd approch is by the elements variable just define the variable inside the render method and according to the condition return the message
   //  ---> 3rd approch is by Ternary Opreator using Ternary Opreator
    render() {

        // if & else

        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //           <h1>  Hello Manoj  </h1>
        //         </div>
        //     )
        // }
        // else{
        //     return (
        //         <div>
        //           <h1>  Hello guest  </h1>
        //         </div>
        //     )

        // }

        // Element Variables

        // let message = '';
        // if(this.state.isLoggedIn){
        //     message= message + 'Welcome Manoj'
        // }
        // else{
        //     message = message + 'Welcome guest'
        // }

        
        // return <div>{message}</div>

        // Using Ternary Opreator --> most commonly used

        // return(
        //     this.state.isLoggedIn?<div>Welcome Manoj</div> : <div>Welcome guest</div>
        // )
      
        // Using Short Circuit Opreator

        // here if the both condition is true means isLoggedIn is true then welcome Manoj will be prited to ui

        return this.state.isLoggedIn && <div>Welcome Manoj</div>


    }
}

export default ConRendering
