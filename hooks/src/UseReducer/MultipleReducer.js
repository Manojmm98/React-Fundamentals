// we can use multiple reducer to define diffrent state by just creating another reducer

import React,{useReducer} from 'react'

let state = {
    intialvalue:1
}

const reducer =(state,action)=>{
     switch(action.type){
       case 'change' :
           return {intialvalue:state.intialvalue+action.value}

     }

}

function MultipleReducer() {

    // we only have to define the number of reducer we want and have to render them 

    const [count,dispatch] = useReducer(reducer,state)
    const [count1,dispatch1] = useReducer(reducer,state)
    return (
        <>
        <div>
              <h2>count is {count.intialvalue} </h2>
            <button onClick={()=> dispatch({type:'change', value: 5})} >Increment1</button>
        </div>
        <div>
              <h2>count is {count1.intialvalue} </h2>
            <button onClick={()=> dispatch1({type:'change', value: 5})} >Increment2</button>
       </div>
        </>
    )
}

export default MultipleReducer
