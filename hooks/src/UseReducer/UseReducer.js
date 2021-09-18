
// import usereducer from react --> usereducer is an alternative to useState

import React,{useReducer} from 'react'

// declare intial state as 0

let IntialState = 0;

// reduce function is an arrow function which takes two argument one is the current state and 2nd is the action 

const reducer =(state,action)=>{

    switch(action){
        case 'Increment' :
            return state+1;
        case 'Decrement' :
            return state-1;
        case  'Reset' :    
        return IntialState;
        default :
        return state;
    }
}



function UseReducer() {

    // usereducer takes two argument one is the state and another one is reduce function

    // here count is the current value of state and dispatch is the action dispatcher function
     const [count,dispatch] = useReducer(reducer,IntialState)
     

     // on the onclick handler dispatch the action according to the action type
    return (
        <div>
            <div> count is {count} </div>
            <button onClick={()=>dispatch('Increment')} >Increment</button>
            <button  onClick={()=>dispatch('Decrement')} >Decrement</button>
            <button onClick={()=>dispatch('Reset')} >Reset</button>
            
        </div>
    )
}

export default UseReducer
