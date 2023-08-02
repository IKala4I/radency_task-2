import {AppStateType} from './store'
import {NoteType} from './notesReducer'

export const getNotes = (state: AppStateType): NoteType[] => {
    return state.notes.notes
}
export const getNoteIdForUpdate = (state: AppStateType): number | null => {
    return state.notes.noteIdForUpdate
}
export const getIsCreateMode = (state: AppStateType): boolean => {
    return state.formModes.isCreateMode
}
export const getIsEditMode = (state: AppStateType): boolean => {
    return state.formModes.isEditMode
}
export const getNameNoteForUpdate = (noteId: number) => (state: AppStateType): string => {
    const notes = getNotes(state)
    return notes[noteId].name
}
export const getContentNoteForUpdate = (noteId: number) => (state: AppStateType): string => {
    const notes = getNotes(state)
    return notes[noteId].content
}