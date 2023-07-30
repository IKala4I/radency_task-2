import {createStore} from 'redux'
import notesReducer from './notesReducer'

export const store = createStore(notesReducer)

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never