export var initialState = {
    quote: {}
};

const changeQuoteReducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'CHANGE_QUOTE':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const rootReducer = (state = initialState, action) => {
    return {
        quote: changeQuoteReducer(state, action)
    };
}