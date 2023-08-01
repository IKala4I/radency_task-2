import taskIcon from '../../../../../assets/images/icons/cart-icon.svg'
import ideaIcon from '../../../../../assets/images/icons/bulb-icon.svg'
import quoteIcon from '../../../../../assets/images/icons/quote-icon.svg'
import thoughtIcon from '../../../../../assets/images/icons/brain-icon.svg'
import {noteCategories} from '../../../../../enums/noteCategories'
import styles from '../../Rows.module.css'

const icons = new Map([
    [noteCategories.Task, taskIcon],
    [noteCategories.Random_Thought, thoughtIcon],
    [noteCategories.Idea, ideaIcon],
    [noteCategories.Quote, quoteIcon]
])

type SummaryTableRowPropsType = {
    category: noteCategories,
    activeNotesCount: Number,
    archivedNotesCount: Number
}
const SummaryTableRow = ({category, activeNotesCount, archivedNotesCount}: SummaryTableRowPropsType) => {
    return (
        <div className={`${styles.tableRow} ${styles.summaryTableRow}`}>
            <div className={styles.iconBlock}>
                <img className={styles.iconImg} src={icons.get(category)} alt={category}/>
            </div>
            <span className={styles.info}>{category}</span>
            <span className={styles.info}>{`${activeNotesCount}`}</span>
            <span className={styles.info}>{`${archivedNotesCount}`}</span>
        </div>
    )
}

export default SummaryTableRow