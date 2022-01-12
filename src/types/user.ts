export interface UserState {
  acces: boolean;
  error: null | string;
  loading?: boolean;
  user: null|IFormInput
}

export interface IFormInput {
  email: string;
  password?: string;
  dob?: string;
  fullName?: string;
  id?: string
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
  payload: IFormInput
}

interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR,
  payload: string
}


export enum UserActionTypes {
  USER_CHANGE_SACCESS = 'USER_CHANGE_SACCESS', 
  USER_CHANGE_ERROR = 'USER_CHANGE_ERROR',
  USER_LOADING = 'USER_LOADING'
}

interface UserChangeSuccessAction {
  type: UserActionTypes.USER_CHANGE_SACCESS
  payload: IFormInput
}

interface UserChangeErrorAction {
  type: UserActionTypes.USER_CHANGE_ERROR
  payload: string
}


interface UserLoading {
  type: UserActionTypes.USER_LOADING
}

export type UserAction = UserChangeSuccessAction | UserChangeErrorAction | UserLoading
export type AuthAction = AuthSuccessAction | AuthErrorAction | LogoutAction