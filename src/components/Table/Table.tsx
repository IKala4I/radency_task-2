import TableNoteHeader from './Headers/TableNoteHeader/TableNoteHeader'
import TableNoteRows from './Rows/TableNoteRows/TableNoteRows'
import styles from './Table.module.css'
import {ObjWIthNotesArray} from '../../Types/types'
import {tableTypes} from '../../enums/tableTypes'
import SummaryTableHeader from './Headers/SummaryTableHeader/SummaryTableHeader'
import SummaryTableRows from './Rows/SummaryTableRows/SummaryTableRows'
import {useSelector} from 'react-redux'
import {getNotes} from '../../redux/selectors'

const Table = (props: any) => {
    const {tableType, ...restProps} = props
    const notes = useSelector(getNotes)

    const archivedNotes = notes.filter(note => note.archived)
    const activeNotes = notes.filter(note => !note.archived)

    switch (tableType) {
        case tableTypes.ActiveNotes:
            return (
                <div className={styles.table}>
                    <TableNoteHeader/>
                    <TableNoteRows notes={activeNotes} {...restProps}/>
                </div>
            )
        case tableTypes.ArchivedNotes:
            return (
                <div className={styles.table}>
                    <TableNoteHeader/>
                    <TableNoteRows notes={archivedNotes} {...restProps}/>
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