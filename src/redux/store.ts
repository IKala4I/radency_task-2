import {combineReducers, createStore} from 'redux'
import notesReducer from './notesReducer'

const rootReducer = combineReducers({
    notes: notesReducer
})

export const store = createStore(rootReducer)

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>