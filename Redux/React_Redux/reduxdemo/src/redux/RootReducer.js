
import { combineReducers } from "redux";
import IceReducer from './IceCream/IceReducer'
import {Reducer} from './Reducer'

 export const rootReducer = combineReducers({
    IceCream: IceReducer,
    cake : Reducer

})