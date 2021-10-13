 import React,{useState} from 'react'
import TitleDocument from './TitleDocument'
 
 function Customhook() {

    const [count,setCount]= useState(0)

    // here we replaced useEffect with our own custom hook
    TitleDocument(count);

    // useEffect(() => {
    //     //alert(`Hii i am ${count}`)
    //     document.title = `count is ${count}`
    // },[count])
     return (
         <div>
             <h2>Count is {count}</h2>
             <button onClick={()=>setCount(count+1)}>Click</button>
         </div>
     )
 }
 
 export default Customhook
 