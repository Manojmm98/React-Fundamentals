

import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const intialstate={
    loading: true,
    error : '',
    user: []
}

const reducer =(state,action)=>{

   switch(action.type){
       case 'FETCH_SUCESS' :
       return {
        loading : false,

        user : action.payload,

        error : ''

       }
       
       case 'FETCH_FAILURE' :
       return{
        
        loading : false,

        user :[],

        error : 'something went wrong'

       }

        default :
         return state;
   }

}

// always define useeffect inside the function because the effect arises after action done
function FretchWithUseREducer() {
    // define usereducer
  const [state,dispatch] = useReducer(reducer,intialstate);

  useEffect(() => {
    
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
       dispatch({ type:'FETCH_SUCESS',payload:response.data})
    })
    .catch(error =>{
       dispatch({ type:'FETCH_FAILURE'})
    })
     
  }, [])


  // define the loading and error as state.loading because state provide us these details
    return (
        <div>
            {
              
              state.loading ? 'Loading please wait' :state.user.map(user => (
                  <li key={user.id}>{user.title}</li>
              ))

            }
            { state.error ? state.error :null}
            
        </div>
    )
}

export default FretchWithUseREducer
