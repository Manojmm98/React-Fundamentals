import React, { Component } from 'react'
import Childrefcomponent from './Childrefcomponent'

export class ParentRefComponent extends Component {

    constructor(props) {
        super(props)
        
        // create reactRef  
        this.componentrRef = React.createRef();

    }
    
    

    clickHandler=()=>{
        // attach the componentref to the focushandler passed through child component
        this.componentrRef.current.focusHandler();
    }
    
    render() {
        return (
            <div>
                
                <button onClick={this.clickHandler}>Class Ref</button>
                <Childrefcomponent ref={this.componentrRef}/>
            </div>
        )
    }
}

export default ParentRefComponent
