import {getAllProduct, addProducts, deleteProduct, EditProduct, getProductById} from "../actions/productActions"

const initialState = {
    items: [
        {id: 1, productName: "Product 1", price: 10000},
        {id: 2, productName: "Product 2", price: 20000},
        {id: 3, productName: "Product 3", price: 30000}
    ]
    , isLoading: true
}

function productReducer(state = initialState, action) {
    switch (action.type) {
        case getAllProduct :
            return {...state, items: state.items};
        case getProductById :
            return {...state, items: state.items.find(item => item.id === action.payload)}
            break
        case addProducts :
            return {...state, items: state.items.concat([action.payload])}
            break
        case deleteProduct :
            return {...state, items: state.items.filter(item => item.id !== action.payload)}
            break
        default :
            return state
                ;
    }
}
export default productReducer;