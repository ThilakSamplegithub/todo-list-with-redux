import {combineReducers} from "redux"
import { todoListreducer } from "./reducer"
import { counterReducer } from "./counterReducer"
export const rootReducer=combineReducers({todoListreducer,counterReducer})