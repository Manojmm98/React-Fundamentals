import React,{useReducer} from 'react'

let IntialState= {
      IntialState1:0
}

// we can define the increment and decrement value by action.value by providing our required value inside dispatch function
const reducer=(state,action)=>{
   switch(action.type){
       case 'increment':
           return {IntialState1: state.IntialState1+action.value}
       case 'decrement':
           return {IntialState1: state.IntialState1-action.value}

       case 'reset' :
           return IntialState

       default :
       return state;
   }
}


function UseReducerwithObject() {

    // the value that we want to set as our action we have to provide it inside dispatch function
  const [count,dispatch]  = useReducer(IntialState,reducer);
    return (
        <div>

            <h1> count is {count.IntialState1} </h1>
            <button onClick={()=>dispatch({type : 'increment',value : 1})} >Increment</button>
            <button onClick={()=>dispatch({ type : 'decrement', value : 1})}>decrement </button>
            <button onClick={()=>dispatch({type : 'increment',value : 5})} >Increment 5 </button>
            <button onClick={()=>dispatch({ type : 'decrement', value : 5})}>decrement 5 </button>
            <button onClick={()=>dispatch({ type : 'reset'})}>reset </button>
            
        </div>
    )
}

export default UseReducerwithObject
