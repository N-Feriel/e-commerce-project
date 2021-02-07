const initialState = {
    products: null,
    status: "loading",
    error: null,
};


export default function productReducer(state = initialState, action) {
switch (action.type) {
    case "REQUEST_PRODUCTS_DATA": {
        return {
            ...state,
            status: 'loading'
        }
    }
    case "RECEIVE_PRODUCTS_DATA":{
        return {
            ...state,
            status: 'idle',
            products: [
                ...action.data

            ]
            
            
            
        }
    }

    case "RECEIVE_PRODUCTS_DATA_ERROR": {
        return{
            ...state,
            status: 'error',
            error:{
                ...state.error,
                error: action.error.message
            }
        
        }
    }
    default:{
        return state;
    }
}
}