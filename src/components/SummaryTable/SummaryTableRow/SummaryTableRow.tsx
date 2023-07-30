import taskIcon from '../../../assets/images/icons/cart-icon.svg'
import ideaIcon from '../../../assets/images/icons/bulb-icon.svg'
import quoteIcon from '../../../assets/images/icons/quote-icon.svg'
import thoughtIcon from '../../../assets/images/icons/brain-icon.svg'
import {noteCategories} from '../../../enums/noteCategories'
import styles from './SummaryTableRow.module.css'

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
        <div className={styles.tableRow}>
            <div className={styles.iconBlock}>
                <img src={icons.get(category)} alt={category}/>
            </div>
            <span>{category}</span>
            <span>{`${activeNotesCount}`}</span>
            <span>{`${archivedNotesCount}`}</span>
        </div>
    )
}

export default SummaryTableRow