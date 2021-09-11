import React, { Component } from 'react'

// if there is an error rather than showing the error message if we want to show our message then 
// declare a error boundary haserror is false and then pass it true in getderivedfromerror
// if we want show the correct element along with the errr element then just wrap all component one by one inside errorboundary  

// 2 methods
// 1--> getDerivedStateFromError

// 2--> componentdidcatch

export class Errorboundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }

    // getDerivedStateFromError 
    // it take error parameter

    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }

    // componentdidcatch
    // it take two parameter error and info

    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }
    
    render() {
       
            if(this.state.hasError){
                return <h1>Something went wrong</h1>
            }
            else{
               return this.props.children
            }
      
    }
}

export default Errorboundary
