import axios from "axios"
import { Dispatch } from "redux"
import { AuthAction, AuthActionTypes } from "../../types/auth"

export const logIn = (reqBody: {}) => {
  return  (dispatch:Dispatch<AuthAction>) => {
      
       axios.post('http://localhost:4000/auth/login', reqBody)
        .then(response => {dispatch({type: AuthActionTypes.LOGIN_SUCCESS, payload: response.data})})
        .catch(error => {dispatch({type: AuthActionTypes.LOGIN_ERROR, payload: error.response.data})})
  }
}

export const reg = (reqBody: {}) => {
  return  (dispatch:Dispatch<AuthAction>) => {
      
       axios.post('http://localhost:4000/auth/registration', reqBody)
        .then(response => {dispatch({type: AuthActionTypes.REG_SUCCESS, payload: response.data})})
        .catch(error => {dispatch({type: AuthActionTypes.REG_ERROR, payload: error.response.data})})
  }
}