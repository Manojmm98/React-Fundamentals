import React,{useState,useEffect} from 'react'

// import useeffects from 'react'
function UseEffectHook() {

    const [count,setCount] = useState(0);

    // first usestate runs and make count is 0 then incrementCount runs after all render useeffect will run
    const incrementCount=()=>{
        setCount((count)=>count+1)
    }
    // useeffects hook takes an arrow function and returns upated value
    useEffect(()=>{
        document.title=`clicked ${count} times`
    })

    return (
        <div>
            <h1>count is : {count}</h1>
            <button onClick={incrementCount}>click</button>
            
        </div>
    )
}

export default UseEffectHook
