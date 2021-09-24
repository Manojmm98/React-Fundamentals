// use callback hook
// it is used for incresing performance issue which stops the valueless re renders of child component
// usecallback hook recive two arguments one is callback function and 2nd is depency array

import React,{useState,useCallback} from 'react'



function UsecallBack() {

    let [count,setCount]= useState(0);
    let [salary,setSalary]= useState(10000);


    let handleSalary=useCallback(()=>{
        console.log('increment salary');
        setSalary(salary+1000);
    },[salary])
    
    let handleCount=useCallback(()=> {
        console.log('increment count');
        setCount(count+1)

    },[count])


    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleCount}> increse count</button>
            <h2>{salary}</h2>
            <button onClick={handleSalary}>increse salary</button>
            
        </div>
    )
}

export default UsecallBack
