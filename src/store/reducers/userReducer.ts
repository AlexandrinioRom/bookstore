import { AuthAction, AuthActionTypes, UserAction, UserActionTypes, UserState } from "../../types/user"

const initialState: UserState = {
  acces: false,
  error: null,
  loading: false,
  user: null
}

export const userReducer = (state = initialState, action: AuthAction | UserAction): UserState => {
  switch (action.type) {

    case UserActionTypes.USER_LOADING: 
      return {...state, loading: true}
    
    case AuthActionTypes.AUTH_SUCCESS:
      return {  acces: true, loading: false, error: null, user: action.payload}
    case AuthActionTypes.AUTH_ERROR: 
      return {  acces: false, loading: false, error: action.payload, user: null }
    case AuthActionTypes.LOGOUT:
      return { acces: false, loading: false, error: null, user: null}

    case UserActionTypes.USER_CHANGE_SACCESS:
      return { acces: true, error: null, user: action.payload}
    case UserActionTypes.USER_CHANGE_ERROR:
      return { ...state, error: action.payload}

    // case UserActionTypes.USER_GETINFO_SUCCESS:
    //   return { ...state, user: action.payload}
    // case UserActionTypes.USER_GETINFO_ERROR:
    //   return { ...state, error: action.payload}
      
    default:
      return state
  }
}

