
// define the STATE

const IntialState={
    numOfCakes:10
}

// define reducer function 

const reducer =(state=IntialState,action)=>{
    switch(action.type){
        case BUY_CAKE :
            return { 
                // make a object of state because if there is more props then it will be simpler
                ...state,
                numOfCakes:state.numOfCakes-1
            }
         default:
            return state;
    }
}