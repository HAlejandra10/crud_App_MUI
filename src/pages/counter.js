import React from "react";
import {deposit, withdraw} from '../store/amount/action';
import { connect }  from 'react-redux'
import { selectCurrentAmount } from "../store/amount/reducer";

const mapStateToProps = (state) =>{
    return {
        amount:selectCurrentAmount(state),
    }
}

const Counter= ({amount,deposit, withdraw}) => {
    return(
        <div> 
            <h1>{amount}</h1>
            <button onClick={()=> deposit()} >Aumentar</button>
            <button onClick={()=>withdraw()}>Disminuir</button>
        </div>
    )
}

//export default Counter;
export default connect(mapStateToProps,{deposit, withdraw}) (Counter);
