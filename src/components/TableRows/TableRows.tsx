import {NoteType} from '../../redux/notesReducer'
import TableRow from './TableRow/TableRow'

const TableRows = ({notes}: { notes: Array<NoteType> }) => {
    const tableRows = notes.map(note =>
        <TableRow
            id={note.id} name={note.name} created={note.created}
            category={note.category} content={note.content} archived={note.archived}
        />)

    return (
        <>
            {tableRows}
        </>
    )
}

export default TableRows