import React,{Component} from 'react';

// here we want to control a count value by creating a state  for shortcut rce-->for component , rconst-->for constructor

class Count extends Component{
    constructor(){
        super()
        this.state={
           count: 0
        }
    }
    
        // There will be two arguments inside the inside setState method 
     // 1--> setState object 
     // 2--> callback functio

     // here the log is excuted before the state is excuted to remove this we have to pass the callback function as arrow function as 2nd argument
    Increase() {
        this.setState({
            count:this.state.count+1
        },
        ()=>{console.log('value',this.state.count);}
        )
        console.log(this.state.count);
    }
    Decrease() {
        this.setState({
            count:this.state.count-1
        })
    }

    render(){
        return(
        <div>
          <h1>Count-{this.state.count}</h1>
          <button onClick={()=>this.Increase()}>Increase me</button>
          <button onClick={()=>{this.Decrease()}}>Decrease me</button>
        </div>
        )
    }
}

export default Count;



