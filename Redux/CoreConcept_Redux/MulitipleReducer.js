
// multiple reducer can be done by creating individual reducers and combine them using combinedReducer


const redux = require('redux');
const createStore = redux.createStore
const combinedReducer = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const cakeState={
    noofCake:10,
}
const IcecreamState={
noofIceCream:20
}

function buyCake(){
    return{ 
        type: BUY_CAKE,
    }
}
function buyIcecream(){
    return { 
        type: BUY_ICECREAM,
    }
}


const cakeReducer= (state=cakeState, action) =>{

    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noofCake:state.noofCake-1
        }
        default : return state
    }
}

const iceCreamReducer= (state=IcecreamState, action) =>{

    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            noofIceCream:state.noofIceCream-1
        }
        default : return state
    }
}

const rootReducer= combinedReducer({
        cake : cakeReducer,
        iceCream : iceCreamReducer
})

const store = createStore(rootReducer);

console.log("intial state",store.getState());

const unsubscribe = store.subscribe(()=> console.log("updated state",store.getState()));

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

unsubscribe()











