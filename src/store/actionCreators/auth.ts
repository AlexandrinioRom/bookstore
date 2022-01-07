import { AuthAction, AuthActionTypes } from "../../types/auth"
import { Dispatch } from "redux"
import axios from "../../api"

export const logIn = (reqBody: {}) => {
  return async (dispatch:Dispatch<AuthAction>) => {
    try {
      const response = await axios.post('/auth/login', reqBody)
      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: response.data.token
      })
    } catch (error:any) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR, payload: error.response.data
      })
    }
  }
}

export const registration = (reqBody: {}) => {
  return  async (dispatch:Dispatch<AuthAction>) => {
    try {
      const response = await axios.post('/auth/registration', reqBody)
      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS, payload: response.data
      })
    } catch (error:any) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR, payload: error.response.data.errors
      })
    }
  }
}