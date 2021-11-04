const deposit = () =>{
    return{ type: 'increase',
        payload: 5

    }
       
}

const withdraw = () =>{
    return {
        type: 'decrease',
        payload: -5
}
        
    
}

export {deposit, withdraw}