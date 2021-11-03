const aumentar = () => {
    return {
        type: 'increase',
        payload: 5,
    };
};

const dismunuir = () => {
    return {
        type: 'decrease',
        payload: -5,
    };
};

export {aumentar, dismunuir};