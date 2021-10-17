import React from 'react'
// useSelector and useDispatch is alternative to mapStateToProps & mapDispatchToProps
import {useSelector,useDispatch} from 'react-redux'

import {buyCake} from '../redux/Action'

function HooksCakeContainer() {

 const numOfCakes = useSelector(state=> state.numOfCakes);

 const dispatch = useDispatch()


    return (
        <div>
            <h2> number of cakes-{numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
