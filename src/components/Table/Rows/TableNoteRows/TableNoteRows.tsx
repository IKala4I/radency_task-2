import TableNoteRow from './TableNoteRow/TableNoteRow'
import {ObjWIthNotesArray} from '../../../../Types/types'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {actions} from '../../../../redux/notesReducer'

const TableNoteRows = ({notes, showEditForm}: any) => {

    const dispatch: Dispatch = useDispatch()

    const archiveNote = (noteId: number) => {
        dispatch(actions.archiveNote(noteId))
    }
    const unarchiveNote = (noteId: number) => {
        dispatch(actions.unarchiveNote(noteId))
    }
    const removeNote = (noteId: number) => {
        dispatch(actions.removeNote(noteId))
    }

    const tableRows = notes.map((note: any) =>
        <TableNoteRow
            note={note}
            archiveUnarchiveCB={note.archived ? unarchiveNote : archiveNote}
            removeNoteCB={removeNote}
            showEditFormCB={showEditForm}
        />)

    return (
        <>
            {tableRows}
        </>
    )
}

export default TableNoteRows