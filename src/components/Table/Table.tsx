import TableHeader from '../TableHeader/TableHeader'
import TableRows from '../TableRows/TableRows'
import styles from './Table.module.css'
import {ObjWIthNotesArray} from '../../Types/types'

const Table = ({notes}: ObjWIthNotesArray) => {
    return (
        <div className={styles.table}>
            <TableHeader/>
            <TableRows notes={notes}/>
        </div>
    )
}

export default Table