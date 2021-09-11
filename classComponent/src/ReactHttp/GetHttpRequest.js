import React, { Component } from 'react'
import axios from 'axios'

export class GetHttpRequest extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             post:[]
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").
        then(response => {
            console.log(response)
            this.setState({
                post:response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    

    // here we are declaring the post array is empty at first because at first render the post array is empty 
    // so the length of post is 0 so it will dont print anything

    // on the again when render occurs it will go to componentdidmount and get the data and now post array 
    // is not empty so it will print the title of posts (that we are doing in map method)
    render() {
        const {post} = this.state
        return (
            
            <div>
                

                {  
                    post.length?
                    post.map((post) =>
                      <div key={post.id}>  {post.title}</div> 
                    
                    ):null
                }
            </div>
        )
    }
}

export default GetHttpRequest
