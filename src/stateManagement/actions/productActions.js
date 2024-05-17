//GetAllProducts
//GetById
//delete
//add
//edit

import {getAllProduct,addProducts,deleteProduct,EditProduct,getProductById} from "./actionTypes"
export const getAllProducts = () => ({
    type: getAllProduct
})

export const getProductsByID = id => ({
    type: getProductById,
    payload: id
})
export const deleteProducts = id => ({
    type: deleteProduct,
    payload: id
})
export const addProduct = (product) => ({
    type: addProducts,
    payload: product
})
export const editProduct = (product) => ({
    type: EditProduct,
    payload: product
})