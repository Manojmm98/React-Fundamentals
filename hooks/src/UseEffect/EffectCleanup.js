import React,{useState,useEffect} from 'react'
import EffectwithCleanup from './EffectwithCleanup'

function EffectCleanup() {
 
    const [display,setDisplay] = useState (true)

    return (
        <div>
           <button onClick={()=>setDisplay(!display)}>Toggle</button>
           {display && <EffectwithCleanup/>} {/*     it is the alternative of if display is true then render component  */}

        </div>
    )
}

export default EffectCleanup
