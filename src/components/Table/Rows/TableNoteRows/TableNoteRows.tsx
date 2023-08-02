import TableNoteRow from './TableNoteRow/TableNoteRow'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {noteActions} from '../../../../redux/notesReducer'
import {formModesActions} from '../../../../redux/formModesReducer'

const TableNoteRows = ({notes, ...props}: any) => {
    const dispatch: Dispatch = useDispatch()
    const {noteIdForUpdate, isEditMode, isCreateMode} = props

    const showEditForm = (noteId: number | null = null) => {
        if (noteId !== noteIdForUpdate && Number.isFinite(noteId)) {
            dispatch(noteActions.changeNoteIdForUpdate(noteId as number))
        }
        if (!isEditMode) {
            if (isCreateMode)
                dispatch(formModesActions.toggleCreateMode())
            dispatch(formModesActions.toggleEditMode())
        }
    }

    const archiveNote = (noteId: number) => {
        dispatch(noteActions.archiveNote(noteId))
    }
    const unarchiveNote = (noteId: number) => {
        dispatch(noteActions.unarchiveNote(noteId))
    }
    const removeNote = (noteId: number) => {
        dispatch(noteActions.removeNote(noteId))
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