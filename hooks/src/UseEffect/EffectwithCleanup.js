import React,{useState,useEffect} from 'react'

function EffectwithCleanup() {
  
    const [x,setX]= useState(0);
    const [y,setY]= useState(0);
    const [display,setDisplay]= useState(true)

    const MousePosition =(e)=>{
        console.log('mose event called');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=> {
        console.log('useEffect called');
        window.addEventListener('mousemove',MousePosition)

        // we want to remove the listner then we have to pass the event inside clean up
       return()=>{
         console.log('unmount occur');
         window.removeEventListener('mousemove',MousePosition)
       }

    },[])

    return (
        <div>
           <h1>Y is {y} --  X is {x}</h1> 
           
        </div>
    )
}

export default EffectwithCleanup
