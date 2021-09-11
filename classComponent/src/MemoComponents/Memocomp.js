import React from 'react'

function Memocomp({name}) {
    console.log('rendering memo component');
    return (
        <div>
            {name}
        </div>
    )
}

// if we want to render only parent not child component every time after 2 second then just use react.memo()
export default React.memo(Memocomp)

