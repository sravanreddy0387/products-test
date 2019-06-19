import * as types from '../Constants/ActionTypes';
import getProducts from '../Api/getProducts';



export function getProductsList() {
    return (dispatch) => {
        getProducts((data) => {
            dispatch({
                type: types.FETCH_PRODUCTS,
                products: data
            })
        });
    }
}

export function showAllProducts() {
    return (dispatch, getState) => {
        let products = getState().data.totalProducts;

        dispatch({
            type: types.SHOW_ALL,
            products: products
        })
    }
}

export function filterProductsBySize(size) {
    return (dispatch, getState) => {
        let currentState = getState().data;
        let filteredArray = currentState.totalProducts.filter((obj) => {
            if (obj.size.indexOf(size) > -1) {
                return obj;
            }
        });
        dispatch({
            type: types.FILTER_BY_SIZE,
            products: filteredArray
        })
    }
}