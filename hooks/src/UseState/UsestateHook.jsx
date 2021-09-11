// import usestate first
import React,{useState} from 'react'

function UsestateHook() {
 
    // declare usestate hook 1st parameter is the count var and next is the the setCount which is setState
    
    const [count,setCount] = useState(0);


    return (
        <div>
            <h1> count is {count} </h1>
            <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    )
}

export default UsestateHook
