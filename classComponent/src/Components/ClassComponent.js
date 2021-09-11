
// for a class component we have to import react and component from react 

// for class component we have to create our custom class (here Welcome) and have to extends component

// also there is a render method it will return html

import React,{Component} from 'react';

//let {name}=this.props
class Welcome extends Component{
    render(){
        // props in class component can be accessed through this.props.ame
        return <h1>I am {this.props.name} Components</h1>;
    }
}

export default Welcome;