import React from 'react'

function Eroor({heroname}) {

    // if we do like this then our entire application crashes
    // we want if a paticular component is crashed then that part will crashed and other componenet will remain same
   if(heroname=='superman'){
       throw new Error('not a hero');
   }

    return (
        <div>
            {heroname}
            
        </div>
    )
}

export default Eroor
