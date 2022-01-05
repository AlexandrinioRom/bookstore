import { AuthAction, AuthActionTypes, AuthState } from "../../types/auth"

const initialState: AuthState = {
  acces: false,
  error: null,
  token: null
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    
    case AuthActionTypes.AUTH_SUCCESS:
      return {  acces: true,  error: null, token: action.payload }
    case AuthActionTypes.AUTH_ERROR: 
      return {  acces: false, error: action.payload, token: null }
    default:
      return state
  }
}