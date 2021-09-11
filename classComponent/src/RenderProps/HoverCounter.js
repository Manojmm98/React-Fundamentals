import React, { Component } from 'react'

export class HoverCounter extends Component {
    
    render() {
        return (
            <div>
                <h1 onMouseOver={this.IncrementCount}>hovered {this.props.count} times</h1>
            </div>
        )
    }
}

export default HoverCounter
