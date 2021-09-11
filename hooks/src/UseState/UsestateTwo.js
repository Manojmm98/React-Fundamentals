import React,{useState} from 'react'

function UsestateTwo() {
    
   const [count,setCount] = useState(0);
   
  const incrementCount=()=>{
       setCount(count+1)
   }
 const  decrementcount=()=>{
       setCount(count-1)
   }
 const  resetcount=()=>{
       setCount(0)
   }

   // we always have to use prevCount method to increae or decrease count  if we will normally use count then it will increase by only one
   // so we have to use prevCount always
   const incrementfive=()=>{
       for(let i=0; i<5; i++) {
    
            setCount(prevCount=>prevCount+1) 
       }
   }


    return (
        <div>
            <div> count is {count}</div>
            <button onClick={incrementCount}>Increase</button>
            <button onClick={decrementcount}>Decrease</button>
            <button onClick={resetcount}>Reset</button>
            <button onClick={incrementfive}>increse 5</button>
        </div>
    )
}

export default UsestateTwo
