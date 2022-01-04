import { userReducer } from "./userReducer"
import { combineReducers } from "redux"
import { AuthReducer } from "./AuthReducer"

export const rootReducer = combineReducers({
  user: userReducer,
  auth: AuthReducer
})

export type RootState = ReturnType<typeof rootReducer>