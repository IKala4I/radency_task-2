import {noteCategories} from '../enums/noteCategories'
import {InferActionsTypes} from './store'
import {NotesArray} from '../Types/types'

const CREATE_NOTE = 'notes/CREATE_NOTE'
const ARCHIVE_NOTE = 'notes/ARCHIVE_NOTE'
const UNARCHIVE_NOTE = 'notes/UNARCHIVE_NOTE'
const REMOVE_NOTE = 'notes/REMOVE_NOTE'
const UPDATE_NOTE = 'notes/UPDATE_NOTE'

export type NoteType = {
    id: number,
    name: string,
    created: string,
    category: noteCategories,
    content: string,
    dates: null | string,
    archived: boolean
}


const initialState = {
    notes: [
        {
            id: 0,
            name: 'Dentist',
            created: 'April 20, 2021',
            category: noteCategories.Task,
            content: 'I\'m gonna have a dentist appointment on the 22/4/2021, I moved it from 24/4/2021',
            dates: '22/4/2021, 24/4/2021',
            archived: false
        },
        {
            id: 1,
            name: 'The theory of evolution',
            created: 'April 27, 2021',
            category: noteCategories.Random_Thought,
            content: 'The evolution...',
            dates: null,
            archived: true
        },
        {
            id: 2,
            name: 'New Feature',
            created: 'May 05, 2021',
            category: noteCategories.Idea,
            content: 'Implement new feature till 10/6/2021 ',
            dates: '10/6/2021',
            archived: false
        },
        {
            id: 3,
            name: 'William Gaddis',
            created: 'May 07, 2021',
            category: noteCategories.Quote,
            content: 'Power doesn\'t co...',
            dates: null,
            archived: false
        },
        {
            id: 4,
            name: 'Create notes',
            created: 'July 27, 2023',
            category: noteCategories.Task,
            content: 'Create notes until 30/7/2023',
            dates: null,
            archived: true
        },
        {
            id: 5,
            name: 'English',
            created: 'July 29, 2023',
            category: noteCategories.Random_Thought,
            content: 'I shouldn\'t forget about English',
            dates: null,
            archived: false
        },
        {
            id: 6,
            name: 'Bruce Lee',
            created: 'July 20, 2023',
            category: noteCategories.Quote,
            content: 'It is the life of perfection which seems to be incomplete, and of fullness which seems to be empty.',
            dates: null,
            archived: false
        }
    ] as NotesArray
}

type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const notesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case CREATE_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    {
                        ...action.note,
                        id: state.notes.length,
                        archived: false
                    }]
            }
        case ARCHIVE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.noteId)
                        return {
                            ...note,
                            archived: true
                        }
                    return note
                })
            }
        case UNARCHIVE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.noteId)
                        return {
                            ...note,
                            archived: false
                        }
                    return note
                })
            }
        case REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.noteId)
            }
        case UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note.id === action.payload.noteId)
                        return {
                            ...note,
                            ...action.payload.data
                        }
                    return note
                })
            }
        default:
            return state
    }
}

export const actions = {
    createNote: (note: NoteType) => ({type: CREATE_NOTE, note} as const),
    archiveNote: (noteId: number) => ({type: ARCHIVE_NOTE, noteId} as const),
    unarchiveNote: (noteId: number) => ({type: UNARCHIVE_NOTE, noteId} as const),
    removeNote: (noteId: number) => ({type: REMOVE_NOTE, noteId} as const),
    updateNote: (noteId: number, data: any) => ({type: UPDATE_NOTE, payload: {noteId, data}} as const),
}

export default notesReducer