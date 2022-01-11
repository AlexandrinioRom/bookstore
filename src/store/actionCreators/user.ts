import { AuthAction, AuthActionTypes, IFormInput, UserAction, UserActionTypes } from "../../types/user"
import $api, { baseURL } from "../../api"
import { Dispatch } from "redux"

export const logIn = (reqBody:IFormInput) => {
  return async (dispatch:Dispatch<AuthAction>) => {
    try {
      const response = await $api.post('/auth/login', reqBody)
      dispatch({
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: response.data.id
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



export const getInfo = async(userId: string | null, setState:React.Dispatch<React.SetStateAction<IFormInput>>) => {
  
    try {
      await $api.get(`${baseURL}user/${userId}`).then( res => 
        setState({
          fullName: res!.data.fullName,
          email: res!.data.email,
          dob: res!.data.dob
        })
      )
      
    } catch (error: any) {
      alert(error.response.data)
    }
}




export const authCheck = () => {
  return async(dispatch:Dispatch<AuthAction>) => {
    try {
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
  return async(dispatch: Dispatch<UserAction>) => {
    try {
      const response = await $api.put('/user', reqBody)
      dispatch({
        type: UserActionTypes.USER_CHANGE_SACCESS, payload: response.data
      })
    } catch (error: any) {
      dispatch({
        type: UserActionTypes.USER_CHANGE_ERROR, payload: error.response.data
        
      })
    }
  }
}
