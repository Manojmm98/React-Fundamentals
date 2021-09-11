import React, { Component } from 'react'

export class Formhandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comment: '',
             Topics : 'python'

        }
    }

    handleinputChange=(event) => {
        this.setState({ 
            username: event.target.value
         })
    }
    handlecommentChange=(event)=>{
        this.setState({
            comment : event.target.value
        })
    }
    
   handletopicsChange=(event)=>{
       this.setState({
           Topics : event.target.value
       })
   }
   handleSubmit=(event)=>{
       alert(`${this.state.username} ${this.state.comment} ${this.state.Topics}`)
       event.preventDefault()
   }

    render() {
        return (
            <form>
                <label>
                    <div>
                    username : <input type="text" value ={this.state.username} onChange={this.handleinputChange}></input>
                    </div>

                    <div>
                    comment : <textarea type="text" value={this.state.comment} onChange={this.handlecommentChange}></textarea>
                    </div>
                       <label > Topics:
                        <select  value ={this.state.Topics} onChange={this.handletopicsChange}>
                        <option value="java">java</option>
                        <option value="python">python</option>
                        <option value="php">php</option>
                        </select>
                        </label>
                    
                </label>
                <div>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}

export default Formhandling
