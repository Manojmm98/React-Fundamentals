import React, { Component } from 'react'

export class ClassEvent extends Component {
   
    // declare the click event functiona

    handleClick(){
        console.log('I am click event for class');
    }
     // dont use function parentheses in a function while declaration for eg-> handleClick()
    render() {
        return (
            <div>
                
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}

export default ClassEvent
