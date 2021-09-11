import React from 'react'

// in functional component if we want to change the event then w have to pass the event function 
//and have to declare that event function inside the main function

function FunctionalEvent() {

    function handleClick(){
        console.log('hello i am an click event for function');
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FunctionalEvent
