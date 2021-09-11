import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

// the order of excution in an react app is as below

// 1---> constructor

// 2--> get_derived_state_fromprops

// 3--> render methods

// 4--> componentDidMount

export class LifeCycleA extends Component {
    
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

    // if we passed a child method lifecycleB inside parent method lifecycleA then all will run as usual and only componentdidmount run last
    
    render() {
        console.log('lifecycle from render method');
        return (
            <>
            <div>
                <h1>Hello i am Manoj</h1>                
            </div>
            <LifeCycleB/>
            </>
        )
    }
}

export default LifeCycleA
