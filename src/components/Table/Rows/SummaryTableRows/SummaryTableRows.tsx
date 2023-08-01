import {noteCategories} from '../../../../enums/noteCategories'
import SummaryTableRow from './SummaryTableRow/SummaryTableRow'

const SummaryTableRows = ({notes}: any) => {
    const summaryTableRows: any = []

    Object.values(noteCategories).forEach(category => {
        const filteredNotes = notes.filter((note: any) => note.category === category)
        const activeNotesCount = filteredNotes.filter((note: any) => !note.archived).length
        const archivedNotesCount = filteredNotes.filter((note: any) => note.archived).length
        summaryTableRows.push(
            <SummaryTableRow
                category={category}
                activeNotesCount={activeNotesCount}
                archivedNotesCount={archivedNotesCount}
            />)
    })

    return (
        <>
            {summaryTableRows}
        </>
    )
}

export default SummaryTableRows