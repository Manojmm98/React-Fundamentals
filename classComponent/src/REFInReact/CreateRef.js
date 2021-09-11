import React, { Component } from 'react'

// there are two way present to create ref in react

// 1--> createRef 
// 2--> callbackRef

export class CreateRef extends Component {
    
    constructor(props) {
        super(props)
    
        // assign input refrence
        // create ref
        this.inputRef = React.createRef()
    }
    
    // assign input ref in componentdidmount to focus the element
    componentDidMount() {
       
        // call the focus method
        this.inputRef.current.focus()

    }
    handleClick=() => {
        alert(this.inputRef.current.value)
    }


    render() {

        // create a input box and pass the ref as inputref
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <button onClick={this.handleClick}>click</button>
            </div>
        )
    }
}

export default CreateRef
