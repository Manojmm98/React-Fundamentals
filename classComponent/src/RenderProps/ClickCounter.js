import React, { Component } from 'react'

export class ClickCounter extends Component {

    
    render() {
        return (
            <div>
                <h1> you have clicked {this.count} times</h1>
                <button onClick={this.IncrementCount}></button>
            </div>
        )
    }
}

export default ClickCounter
