import React, { Component } from 'react'

// the order of excution in an react app is as below

// 1---> constructor

// 2--> get_derived_state_fromprops

// 3--> render methods

// 4--> componentDidMount

export class LifeCycleB extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello'
        }
        console.log('lifecycle from constructor');
    }

    static getDerivedStateFromProps(props,state) {
 
        console.log('lifecycle from getDerivedStateFromprops');
        return null;
    }

    componentDidMount() {

        console.log('lifecycle from componentDidMount');
    }
    
    render() {
        console.log('lifecycle from render method');
        return (
            <div>

                <h1>Hello i am Manoj</h1>
                
            </div>
        )
    }
}

export default LifeCycleB
