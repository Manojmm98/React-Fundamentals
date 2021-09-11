import React, { Component } from 'react'
import RefChildren from './RefChildren';

export class Refparent extends Component {
    // create _constructor

    constructor(props) {
        super(props)
        // create ref here input ref
     this.inputRef = React.createRef();
     

    }

    // create handleClick event
    handleClick=() => {
        this.inputRef.current.focus()
    }

   // render the child component and pass the ref
    render() {
        return (
            <div>
                   <RefChildren ref={this.inputRef}/>
                   <button onClick={this.handleClick}>focous</button>
            </div>
        )
    }
}

export default Refparent
