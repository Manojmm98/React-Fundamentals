import React from 'react';

// higher order component will take argument as original function and will return a new higher order function  
const UpdatedComponent =(originalComponent)=>{
  class newComponent extends React.Component {
        render() {
            return <originalComponent name= 'Manoj' />
        }
  }

  return newComponent;
}

export default UpdatedComponent