const initialState = {
    products: [{
        id: 0,
        title: 'Hello World!'
      }]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        default:
            return state
    }
}