import axios from "axios"
import { Dispatch } from "redux"
import { ProductAction, ProductActionTypes } from "../../types/product"

export const fetchProduct = () => {
  return async (dispatch:Dispatch<ProductAction>) => {
    try {
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data})
    } catch (err) {
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Произошлоа ошибка'})
    }
  }
}