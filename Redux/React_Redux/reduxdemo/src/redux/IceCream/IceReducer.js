
import {BUY_ICECREAM} from './ActionType'


const IntialState={
    noofIceCream:20,
}

const IceReducer=(state=IntialState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            noofIceCream:state.noofIceCream-1
        }
        default : return state
    }
}

export default IceReducer