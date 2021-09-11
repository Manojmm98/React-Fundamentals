import React,{Component} from 'react';
 
class Message extends Component{
     constructor(){
         super()
         this.state={
            message: 'Welcome Home'
         }
     }
     // There will be two arguments inside the inside setState method 
     // 1--> setState object 
     // 2--> callback function
     changeMessage(){
         this.setState({
             message: 'Thanks Buddy'
         })
     }
    render() {
        return(
        <div>
         <h1> {this.state.message} </h1>
        <button onClick={()=>this.changeMessage()}>subscribe</button>
        </div>
        )
    }
}

export default Message