

// if we do import only component then component will re render in every 2 sec
import React,{ Component} from 'react'


// if  want  not rendering the same component again and again after 2 sec then use purecomponent
//import React, { Component,PureComponent } from 'react'
import Memocomp from '../MemoComponents/Memocomp'

import PureComp from './PureComp'
import RegComponent from './RegComponent'

 //class ParentComponent extends PureComponent 

 class ParentComponent extends Component 
 
 {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'parent',
        }
    }

    componentDidMount(){
        setInterval(
            
            ()=>{
                this.setState({ name:'Manoj'})
        
            },2000)
    }
    
    render() {
        console.log('parent render');
        return (
            <div>
                parent component
                {/* <RegComponent name={this.state.name} />
                <PureComp name={this.state.name} / > */}
                <Memocomp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
