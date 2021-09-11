import React, { Component } from 'react'

export class CallbackRef extends Component {
     constructor(props) {
         super(props)
         
         // create callbackref and assign it to null
         this.cbRef=null;

         // set the cb ref to the element which is comming from ref
         this.setcbRef=element=>{
             this.cbRef = element;
         }
        
     }
     
     // now while mounting the object check if cbRef is not equal to null then focus the element
     componentDidMount() {
         if(this.cbRef){
             this.cbRef.focus();
         }
     }

    render() {
        return (
            <div>
                <input type="text" ref={this.setcbRef}></input>
            </div>
        )
    }
}

export default CallbackRef
