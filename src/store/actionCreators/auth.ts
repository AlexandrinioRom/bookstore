import { AuthAction, AuthActionTypes, IFormInput } from "../../types/auth"
import $api, { baseURL } from "../../api"
import { Dispatch } from "redux"

export const logIn = (reqBody:IFormInput) => {
  return async (dispatch:Dispatch<AuthAction>) => {
    try {
      const response = await $api.post('/auth/login', reqBody)
      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: response.data.user
      })
      
      localStorage.setItem("token", response.data.token)

    } catch (error:any) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR, payload: error.response.data
      })
    }
  }
}

export const registration = (reqBody:IFormInput) => {
  return  async (dispatch:Dispatch<AuthAction>) => {
    try {
      const response = await $api.post('/auth/registration', reqBody)
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

export const authCheck = () => {
  return async(dispatch:Dispatch<AuthAction>) => {
    try {
      const response = await $api.get(`${baseURL}user/tokencheck`)
      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS, payload: response.data
      })  
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR, payload: error.response.data
      })
    }
  }
}
