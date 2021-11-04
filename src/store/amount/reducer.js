const initialState = {
    amount: 0,
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state= initialState, action)=>{
    if(action.type === "increase"){
        return{
            ...state,
            amount: state.amount + 5
        }
    }
    if(action.type === "decrease"){
        return{
            ...state,
            amount: state.amount - 5
        }
    }
    return state;
}

export const selectCurrentAmount = (state) =>{
    return state.amountReducer.amount;
};