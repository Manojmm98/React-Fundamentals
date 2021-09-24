
// we can use ref inside our component to pass the reffernce of any variable 


//  here we have a count value intialized to 0 on every seconds it is incremented to 1 and we have to stop it using cleartinterval using useRef
import React,{useRef,useState,useEffect} from 'react'

function RefInsideComponent() {

    
    const [timer,setTimer]=useState(0);
    const timerRef=useRef()

   useEffect(() => {
     timerRef.current = setInterval(() =>{
        setTimer(prevTimer=>prevTimer+1)
    },1000)
       return () => {
           clearInterval(timerRef.current);
       }
   }, [])


    return (
        <div>
            <h2> Timer value is {timer}</h2>
            <button onClick={()=>clearInterval(timerRef.current)}>clear interval</button>
        </div>
    )
}

export default RefInsideComponent
