import React, { Component } from 'react'

export class Childrefcomponent extends Component {
     constructor(props) {
         super(props)
     
         this.inputRef= React.createRef()
     }

     focusHandler(){
         this.inputRef.current.focus();
     }
     

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
            </div>
        )
    }
}

export default Childrefcomponent
