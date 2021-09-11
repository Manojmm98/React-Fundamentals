import React, { Component } from 'react'
import axios from 'axios'
export class PostHttpRequest extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userid: '',
             title: '',
             body: ''
        }
    }

    handleinputChange=(e)=>{
       this.setState({[e.target.name]: e.target.value})
    }

    // post request is same as get by it require two parameters one is the url and other is the state or data which have to be sent
    // here on pressing the submit the name type and data will be printed on console with unique id
    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then((response)=>{ 
          console.log(response);
        })
        .catch((error)=>{
         console.log(error);
        })
    }
    
    render() {

        const {userid, title, body} = this.state
        return (
            <>
            <form onSubmit={this.handleSubmit}>
            <div>
            <input type="text" name="userid" value={ userid } onChange={this.handleinputChange}></input>
            </div>
            <div>
            <input type="text" name="title" value={title} onChange={this.handleinputChange} ></input>
            </div>
            <div>
            <input type="text" name="body" value={body} onChange={this.handleinputChange}></input>
            </div>
            <button type="submit" onClick={this.handleSubmit}>submit</button>
            
            </form>
            </>
        )
    }
}

export default PostHttpRequest
