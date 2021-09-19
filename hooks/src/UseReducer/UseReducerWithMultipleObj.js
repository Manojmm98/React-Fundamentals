import React,{useReducer} from 'react'

const IntialState={
    intialValue : 0,
    finalValue : 10
}



const reducer =(state,action)=>{
    switch(action.type){
       // we have to provide state by spread opretor to obtain the state
        case 'increment':
            return { ...state,intialValue: state.intialValue+action.value}
        case 'decrement':
            return {...state,intialValue: state.intialValue-action.value}

        case 'fincrement' :
            return {...state,finalValue: state.finalValue+action.value}
        case 'fdecrement' :
            return {...state,finalValue: state.finalValue-action.value}
        case 'reset':
            return IntialState
        default :
            return state;

    }
}

function UseReducerWithMultipleObj() {

    const [count,dispatch] =useReducer(reducer,IntialState);
    return (
        <div>
            <h2> Count 1 is {count.intialValue}</h2>
            <h2> Count 2 is {count.finalValue}</h2>

            <button onClick={()=>dispatch({ type:'increment', value : 1})}>increment1</button>
            <button onClick={()=>dispatch({ type:'decrement', value :2})}>decrement1</button>
            <button onClick={()=>dispatch({ type:'fincrement',value : 3})}>increment2</button>
            <button onClick={()=>dispatch({ type:'fdecrement',value :5})}>decrement2</button>
            <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </div>
    )
}

export default UseReducerWithMultipleObj
