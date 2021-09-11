import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    // here we are passing the props from parents to child
     
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'parent'
        }
        this.handleParent= this.handleParent.bind(this);
    }

    
    handleParent(childName) {
        alert(`hello  ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent parenthandler={this.handleParent}/>
            </div>
        )
    }
}

export default ParentComponent
