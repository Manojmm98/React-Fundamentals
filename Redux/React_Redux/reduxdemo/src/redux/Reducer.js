
import { BUY_CAKE } from './ActionType'

const IntialState={
    numOfCakes:10
}

 export const Reducer=(state=IntialState,action) =>{
      switch(action.type){
          case BUY_CAKE:
              return{
                  ...state,
                  numOfCakes : state.numOfCakes-1
              }
              default : return state
            }
        }
 //export default Reducer

