import { AuthAction, AuthActionTypes, AuthState } from "../../types/auth"

const initialState: AuthState = {
  acces: false,
  error: null,
  user: null
}

export const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    
    case AuthActionTypes.AUTH_SUCCESS:
      return {  acces: true,  error: null, user: action.payload }
    case AuthActionTypes.AUTH_ERROR: 
      return {  acces: false, error: action.payload, user: null }
    case AuthActionTypes.LOGOUT:
      return { acces: false, error: null, user: null}
    default:
      return state
  }
}