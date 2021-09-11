import React from 'react'
import Person from './Person'


function Itemlist() {
    // if we have name array  and we want to show them one by one in ui
    let persons = [{
             id :1,
             name:'manoj',
             age:23,
             skills: 'java'
    },
    {
        id :2,
        name:'raja',
        age:22,
        skills: 'python'
    },
    {
        id :3,
        name:'amit',
        age:21,
        skills: 'javascript'
    },
    {
        id :4,
        name:'akash',
        age:25,
        skills: 'react'
    }

]   // using map method
    //let personlist = persons.map(person =><h1> hii i am {person.name} i know {person.skills} and i am {person.age} years old </h1> )
    // if we want to pass the person as a props to another file then 

    // using diffrent file method

    // create map method for displaying the properties of persons and render Person file and pass person as props

    // always we have to pass a key value while using map method
    let personList = persons.map( person=> <Person person ={person}  key={person.id}/>)

    return <div>{personList}</div>
}

export default Itemlist
