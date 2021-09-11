import React, { Component } from 'react'

export class RegComponent extends Component {
    render(props) {
        console.log('reg component render');
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegComponent
