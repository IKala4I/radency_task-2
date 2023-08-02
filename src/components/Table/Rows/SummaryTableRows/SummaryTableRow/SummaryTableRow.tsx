import {noteCategories} from '../../../../../enums/noteCategories'
import styles from '../../Rows.module.css'
import {icons} from '../../../../../imageHelpers'

type SummaryTableRowPropsType = {
    category: noteCategories,
    activeNotesCount: Number,
    archivedNotesCount: Number
}
const SummaryTableRow = ({category, activeNotesCount, archivedNotesCount}: SummaryTableRowPropsType) => {
    return (
        <div className={`${styles.tableRow} ${styles.summaryTableRow}`}>
            <div className={styles.iconBlock}>
                <img className={styles.iconImg} src={icons[category]} alt={category}/>
            </div>
            <span className={styles.info}>{category}</span>
            <span className={styles.info}>{`${activeNotesCount}`}</span>
            <span className={styles.info}>{`${archivedNotesCount}`}</span>
        </div>
    )
}

export default SummaryTableRow