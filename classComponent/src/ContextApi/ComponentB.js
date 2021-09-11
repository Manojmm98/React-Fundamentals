import React, { Component } from 'react'
import ComponentC from './ComponentC'
import UserContext from './Context'

 class ComponentB extends Component {

    // create context with static keyword

    static contextType = UserContext
    
    render() {
        return (
            <div>
                {/* <ComponentC name={this.props.name}/> */}
                ComponentB context {this.context}
                <ComponentC/>
            </div>
        )
    }
}

    // define the type according to the component

    //ComponentB.contextType = UserContext


export default ComponentB
