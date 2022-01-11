export interface UserState {
  acces: boolean;
  error: null | string;
  user: null | string
}

export interface IFormInput {
  email: string;
  password?: string;
  dob?: string;
  fullName?: string;
  
}

export enum AuthActionTypes {
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
  LOGOUT = 'LOGOUT'
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT
}

interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS,
  payload: string
}

interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR,
  payload: string
}


export enum UserActionTypes {
  USER_CHANGE_SACCESS = 'USER_CHANGE_SACCESS', 
  USER_CHANGE_ERROR = 'USER_CHANGE_ERROR'
}

interface UserChangeSuccessAction {
  type: UserActionTypes.USER_CHANGE_SACCESS
  payload: string
}

interface UserChangeErrorAction {
  type: UserActionTypes.USER_CHANGE_ERROR
  payload: string
}

export type UserAction = UserChangeSuccessAction | UserChangeErrorAction
export type AuthAction = AuthSuccessAction | AuthErrorAction | LogoutAction