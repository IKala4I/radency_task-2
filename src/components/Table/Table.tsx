import TableHeader from '../TableHeader/TableHeader'
import TableRows from '../TableRows/TableRows'
import {NoteType} from '../../redux/notesReducer'
import styles from './Table.module.css'

const Table = ({notes}: { notes: Array<NoteType> }) => {
    return (
        <div className={styles.table}>
            <TableHeader/>
            <TableRows notes={notes}/>
        </div>
    )
}

export default Table