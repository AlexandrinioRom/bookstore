export interface AuthState {
  acces: boolean;
  error: null | string;
  user: null | string
}

export interface IFormInput {
  email: string;
  password: string;
  dob?: string;
  fullName?: string;
}

export enum AuthActionTypes {
  AUTH_SUCCESS = 'AUTH_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
}

interface AuthSuccessAction {
  type: AuthActionTypes.AUTH_SUCCESS,
  payload: string
}

interface AuthErrorAction {
  type: AuthActionTypes.AUTH_ERROR,
  payload: string
}

export type AuthAction = AuthSuccessAction | AuthErrorAction