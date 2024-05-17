import React from 'react';
import  {getAllProduct,deleteProduct} from "../stateManagement/actions/actionTypes"
import {connect} from "react-redux"
function ProductList(props) {
    return (
        <div>
            <h1>Products</h1>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    );
}

export default ProductList;