import React,{useState,useEffect} from 'react'

function HookExample2() {
 const [x,setX] = useState(0);
 const [y,setY] = useState(1);

 // here we do not want to render the useEffect event on every render so we have to pass the empty dependency 
 // array inside useeffect then we will stop the  rendering of useEffect every time on state changes
 const logMousePosition=(e)=>{
      console.log('mouse event');
      setX(e.clientX);
      setY(e.clientY);
 }

 useEffect(()=> {
   console.log(`useeffect called`)     
   window.addEventListener('mousemove',logMousePosition)
 },[])

    return (
        <div>
          <h1> Hook X-{x}  Hook Y-{y} </h1>
        </div>
    )
}

export default HookExample2
