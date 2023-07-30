import {AppStateType} from './store'

export const getNotes = (state: AppStateType) => {
    return state.notes.notes
}