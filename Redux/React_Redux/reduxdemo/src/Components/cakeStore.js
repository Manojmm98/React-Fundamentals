import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux/Action'


function CakeStore(props) {
    return (
        <div>
            <h2>No of Cakes-{props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps = state=>{
    return {
        numOfCakes:state.numOfCakes
    }
  }
 
const mapDispatchToProps = dispatch=>{
    return {
        buyCake : ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeStore)
