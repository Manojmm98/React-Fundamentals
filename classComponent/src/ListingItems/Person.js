import React from 'react'


// destructure the props received from itemlist and render the h1 tag
function Person({person}) {
    return (
        <div>
            <h1> hii i am {person.name} i know {person.skills} and i am {person.age} years old </h1>
        </div>
    )
}

export default Person
