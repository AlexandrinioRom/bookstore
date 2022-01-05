import { productReducer } from "./productReducer"
import { combineReducers } from "redux"
import { AuthReducer } from "./AuthReducer"

export const rootReducer = combineReducers({
  product: productReducer,
  auth: AuthReducer
})

export type RootState = ReturnType<typeof rootReducer>