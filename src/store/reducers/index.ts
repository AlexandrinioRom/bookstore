import { productReducer } from "./productReducer"
import { combineReducers } from "redux"
import { userReducer } from "./userReducer"

export const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>