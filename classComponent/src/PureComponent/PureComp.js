
// pure component can be created by replace

import React, { PureComponent } from 'react'

 class PureComp extends PureComponent {
    render(props) {
        console.log('pure render');
        return (
            <div>
                pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp

