import {AppStateType} from './store'

export const getNotes = (state: AppStateType) => {
    return state.notes.notes
}
export const getNoteIdForUpdate = (state: AppStateType) => {
    return state.notes.noteIdForUpdate
}
export const getIsCreateMode = (state: AppStateType) => {
    return state.formModes.isCreateMode
}
export const getIsEditMode = (state: AppStateType) => {
    return state.formModes.isEditMode
}
export const getNameNoteForUpdate = (noteId: number) => (state: AppStateType) => {
    const notes = getNotes(state)
    return notes[noteId].name
}
export const getContentNoteForUpdate = (noteId: number) => (state: AppStateType) => {
    const notes = getNotes(state)
    return notes[noteId].content
}