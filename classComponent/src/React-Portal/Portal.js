
// portal is used to render a component under our personal div tag not under root tag(all react component comes under react root)
// we created a div tag in index.html and we want to render our component under our div tag my root so we have to use React.portal

// import reactdom
import ReactDom from 'react-dom'
import React from 'react'

// return React.portal which will return two parameter one is the jsx element and other is the div id

// create reactportal and return it

function Portal(){
    return ReactDom.createPortal(
        <div>
           <h1> React Portal </h1>
        </div>,
        document.getElementById('myroot')
    )
}

export default Portal
