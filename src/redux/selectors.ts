import {AppStateType} from './store'

export const getNotes = (state: AppStateType) => {
    return state.notes.notes
}
export const getNoteIdForUpdate = (state: AppStateType) => {
    return state.notes.noteIdForUpdate
}