export interface AuthState {
  acces: boolean;
  error: null | string;
  token: null | any[]
}

export enum AuthActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  REG_SUCCESS = 'REG_SUCCESS',
  REG_ERROR = 'REG_ERROR',
}
interface LOGIN_SUCCESS {
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: boolean
}

interface LOGIN_ERROR {
  type: AuthActionTypes.LOGIN_ERROR,
  payload: string
}

interface REG_SUCCESS {
  type: AuthActionTypes.REG_SUCCESS,
  payload: boolean
}

interface REG_ERROR {
  type: AuthActionTypes.REG_ERROR,
  payload: string
}
export type AuthAction = LOGIN_SUCCESS | LOGIN_ERROR | REG_SUCCESS | REG_ERROR