// render props is a method which will mix up two component into one component

import React, { Component } from 'react'

export class RenderProps extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    IncrementCount=()=>{
        this.setState((prevState)=>{
        return   {count: prevState.count+1}
        })
    }

    render() {
        return (
            <div>
                {this.props.children(this.state.count,this.IncrementCount)}
            </div>
        )
    }
}

export default RenderProps
