export interface AuthState {
  acces: boolean;
  error: null | string;
  token: null | string
}

export enum AuthActionTypes {
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
 
}
interface AUTH_SUCCESS {
  type: AuthActionTypes.AUTH_SUCCESS,
  payload: string
}

interface AUTH_ERROR {
  type: AuthActionTypes.AUTH_ERROR,
  payload: string
}

export type AuthAction = AUTH_SUCCESS | AUTH_ERROR 