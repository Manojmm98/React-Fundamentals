

// useRef hooks let us to acess the DOM nodes(components) directly from react 

// steps--> import  it from react, create a variable and store useRef by passing intial value as null

// pass the ref to the component

// call the useRef inside useeffect

// let suppose we have an input box we want to focus on that box when components render
// lets have a look on how we will do with useRef

// current property is given by react useRef

import React,{useEffect,useRef} from 'react';

function FocusInput() {

    const inputRef = useRef(null);

    useEffect(() => {

        inputRef.current.focus();
    })


    return (
        <div>
            <input ref={inputRef} placeholder="focus here" type="text"></input>
        </div>
    )
}

export default FocusInput
