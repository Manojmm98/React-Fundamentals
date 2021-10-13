// require redux
const redux = require('redux');

// create createStore 
const createStore =redux.createStore;

// define actions 

const BUY_CAKE = 'BUY_CAKE'

// define actions
function buyCake(){
    return { 
       type: BUY_CAKE
    }
}

// define reducers 

const IntialState={
    numOfCakes:10
}

const Reducer=(state=IntialState,action)=>{
    switch(action.type){
        case BUY_CAKE :
            return{
                numOfCakes:state.numOfCakes-1
            }
         default :
                return state
    }
}


const store = createStore(Reducer);
console.log("intial state",store.getState());

// subscribe the action to see the updated state
const unsubscribe=store.subscribe(()=>console.log("updated state",store.getState()));

// dispatch the action

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();















