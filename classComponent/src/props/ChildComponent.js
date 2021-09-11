import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* if we want to pass any argument then we have to do it in arrow fumction */}
            <button onClick={()=>props.parenthandler('child')}>Child Component</button>
        </div>
    )
}

export default ChildComponent
