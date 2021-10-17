import React from 'react'
// import connect and action creator
import {connect} from 'react-redux'
import {buyIcecream} from '../../redux/IceCream/Action'

function IcecreamContainer(props) {
    return (
        <div>
            <h2>NO of icecream-{props.noofIceCream}</h2>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        noofIceCream : state.IceCream.noofIceCream
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyIcecream: ()=>dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer)
