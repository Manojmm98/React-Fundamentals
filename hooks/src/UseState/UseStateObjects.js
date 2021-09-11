import React,{useState} from 'react'

function UseStateObjects() {

    const [name,setName] = useState({firstname:'',lastname:''})

    return (
        <>
           
           {/* if we will type the firstname then the lastname disspears   so we have to  */}
           {/* pass the name parameter as props */}
              
           <div>
               <input  type="text" value={name.firstname}  onChange={e=>setName({...name,firstname:e.target.value})  }></input>
               <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}></input>
             </div>
           <h2> your first name {name.firstname}</h2>
           <h2> your last name {name.lastname}</h2>
        </>
    )
}

export default UseStateObjects
