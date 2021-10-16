
const Redux=require('redux');
const createStore = Redux.createStore
const applyMiddleware = Redux.applyMiddleware
const thunk = require('redux-thunk').default
const axios=require('axios')

// define the state
const IntialState={
    loading:true,
    user:[],
    error:''
}

// define action
const FETCH_USER_REQUEST ='FETCH_USER_REQUEST';
const FETCH_USER_SUCESS='FETCH_USER_SUCESS';
const FETCH_USER_FAILURE='FETCH_USER_FAILURE';

// define action function

function fetchUserRequest(){
    return { 
        type: FETCH_USER_REQUEST
    }
}

function fetchUserSucess(user){
    return { 
        type: FETCH_USER_SUCESS,
        payload: user
    }
}

function fetchUserFailure(){
    return { 
        type: FETCH_USER_FAILURE,
    }
}


// define reducer

const Reducer =(state=IntialState, action)=>{
      switch(action.type){

        case FETCH_USER_REQUEST: return {
               ...state,
               loading : true,
        }
          case FETCH_USER_SUCESS:return{

            loading : false,
            user : action.payload,
            error : ''

          }
          case FETCH_USER_FAILURE: return {
              loading : false,
              user : [],
              error : action.payload,
          }
      }
}

const getUser = () =>{
    return function(dispatch) {
        dispatch(getUser())
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{
          // show the data
          const user = response.data.map(name =>user.name)
          dispatch(getUser(user));
      })
      .catch((error)=>{
          console.log(error.message);
          
      })
    }

}

const store = createStore(Reducer,applyMiddleware(thunk))

store.subscribe("updated state",store.getState())

store.dispatch(getUser())




