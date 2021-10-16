// define the action it is a string constant

const BUY_CAKE = 'BUY_CAKE'

// define the action function & creater

function buyCake(){
    // create the action type and return it
   return  {
        type: BUY_CAKE,
        info: 'first cake brought'
    }
}