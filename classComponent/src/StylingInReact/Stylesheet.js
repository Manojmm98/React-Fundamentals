import React from 'react'
import './Style1.css'

// 1st approch

// here just create a object and put the styles there and give it to h1
// // remeber all the properties are string eg--> 'red' 'green'
// const header={
//     backgroundColor: 'red',
//     color: 'green',

// }


// 2nd approch is like normal  html and css

function Stylesheet() {
    return (
        <div>
           {/* <h1 style={header}>hello brother</h1>  */}
           {/* <h2 className='sis'>Hello sister</h2> */}

           <h1 className='first'> hii how are you </h1>
           <h2 className='second'>yeah i am fine</h2>
        </div>
    )
}

export default Stylesheet
