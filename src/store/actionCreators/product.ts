import axios from "axios"
import { Dispatch } from "redux"
import $api from "../../api"
import { ProductAction, ProductActionTypes } from "../../types/product"

export const fetchProduct = () => {
  return async (dispatch:Dispatch<ProductAction>) => {
    try {
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
      const res = await $api.get('/user')
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: res.data})
    } catch (err: any) {
      dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: err.response.data})
    }
  }
}