import React from 'react'

// function RefChildren() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// create forwardref   

// create arrow function and store refChildren and 

const RefChildren = React.forwardRef((props,ref)=> {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )

})


export default RefChildren
