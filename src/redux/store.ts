import {combineReducers, createStore} from 'redux'
import notesReducer from './notesReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
    notes: notesReducer,
    form: formReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers())

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

