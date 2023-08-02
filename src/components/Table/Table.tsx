import TableNoteHeader from './Headers/TableNoteHeader/TableNoteHeader'
import TableNoteRows from './Rows/TableNoteRows/TableNoteRows'
import styles from './Table.module.css'
import {ObjWIthNotesArray} from '../../Types/types'
import {tableTypes} from '../../enums/tableTypes'
import SummaryTableHeader from './Headers/SummaryTableHeader/SummaryTableHeader'
import SummaryTableRows from './Rows/SummaryTableRows/SummaryTableRows'

const Table = ({notes, tableType}: any) => {
    switch (tableType) {
        case tableTypes.Notes:
            return (
                <div className={styles.table}>
                    <TableNoteHeader/>
                    <TableNoteRows notes={notes}/>
                </div>
            )
        case tableTypes.Summary:
            return (
                <div className={styles.table}>
                    <SummaryTableHeader/>
                    <SummaryTableRows notes={notes}/>
                </div>
            )
        default:
            return (
                <></>
            )
    }
}

export default Table