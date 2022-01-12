import { AuthAction, AuthActionTypes, IFormInput, UserAction, UserActionTypes } from "../../types/user"
import $api, { baseURL } from "../../api"
import { Dispatch } from "redux"

export const logIn = (reqBody:IFormInput) => {
  return async (dispatch:Dispatch<AuthAction>) => {
    try {
      const response = await $api.post('/auth/login', reqBody)
      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: response.data.info
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
  return async(dispatch:Dispatch<AuthAction| UserAction>) => {
    try {
      dispatch({
        type: UserActionTypes.USER_LOADING
      })
      const response = await $api.get(`${baseURL}user/tokencheck`)
      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: response.data
      })  
    } catch (error: any) {
      dispatch({
        type: AuthActionTypes.AUTH_ERROR,
        payload: error.response.data
      })
      localStorage.removeItem('token')
    }
  }
}

export const logout = () => {
  return (dispatch:Dispatch<AuthAction>) => {

    dispatch({
      type: AuthActionTypes.LOGOUT
    })  
    localStorage.removeItem('token')
    
  }
}

export const update = (reqBody:IFormInput) => {
  return async(dispatch: Dispatch<UserAction|AuthAction>) => {
    try {

      const response = await $api.put('/user', reqBody)
      dispatch({
        type: UserActionTypes.USER_CHANGE_SACCESS, payload: response.data
      })
      alert('Данные изменены')
    } catch (error: any) {
      if (error.response.data === 'jwt malformed'||'jwt expired)') {
        dispatch({
          type: AuthActionTypes.AUTH_ERROR,
          payload: error.response.data
        })
      } else {
        dispatch({
          type: UserActionTypes.USER_CHANGE_ERROR, payload: error.response.data
          
        })
      }
      
    }
  }
}
