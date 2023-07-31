import {noteCategories} from '../../enums/noteCategories'
import SummaryTableRow from './SummaryTableRow/SummaryTableRow'
import styles from './SummaryTable.module.css'
import {ObjWIthNotesArray} from '../../Types/types'

const SummaryTable = ({notes}: ObjWIthNotesArray) => {
    const summaryTableRows: any = []

    Object.values(noteCategories).forEach(category => {
        const filteredNotes = notes.filter(note => note.category === category)
        const activeNotesCount = filteredNotes.filter(note => !note.archived).length
        const archivedNotesCount = filteredNotes.filter(note => note.archived).length
        summaryTableRows.push(
            <SummaryTableRow
                category={category}
                activeNotesCount={activeNotesCount}
                archivedNotesCount={archivedNotesCount}
            />)
    })

    return (
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                <div></div>
                <h4>Note Category</h4>
                <h4>Active</h4>
                <h4>Archived</h4>
            </div>
            {summaryTableRows}
        </div>
    )
}

export default SummaryTable