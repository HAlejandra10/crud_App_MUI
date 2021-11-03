import React from 'react'
import {aumentar, dismunuir} from '../store/amount/action'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return{
        amount: state.amountReducer.amount,
    }
}

const Counter=({amount,aumentar,dismunuir})=> {
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={()=>aumentar()}>INCREMENTO</button>
            <br/>

            <button onClick={()=>dismunuir()}>DISMINUCION</button>
        </div>
    )
}

//export default Counter;
export default connect(mapStateToProps,{aumentar, dismunuir})(Counter)

