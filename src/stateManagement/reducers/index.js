import {combineReduces} from "redux"
import {productReducer} from "./productReducer"

export default combineReduces({
    productState: productReducer,
})