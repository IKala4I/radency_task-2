import {NoteType} from '../../../../../redux/notesReducer'
import pencil from '../../../../../assets/images/tools/pencil-tool.svg'
import trashBin from '../../../../../assets/images/tools/trash-tool-grey.svg'
import taskIcon from '../../../../../assets/images/icons/cart-icon.svg'
import ideaIcon from '../../../../../assets/images/icons/bulb-icon.svg'
import quoteIcon from '../../../../../assets/images/icons/quote-icon.svg'
import thoughtIcon from '../../../../../assets/images/icons/brain-icon.svg'
import unarchiveTool from '../../../../../assets/images/tools/unarchive-tool-grey.svg'
import archiveTool from '../../../../../assets/images/tools/archive-tool-grey.svg'

import styles from '../../Rows.module.css'
import {noteCategories} from '../../../../../enums/noteCategories'

const icons = new Map([
    [noteCategories.Task, taskIcon],
    [noteCategories.Random_Thought, thoughtIcon],
    [noteCategories.Idea, ideaIcon],
    [noteCategories.Quote, quoteIcon]
])

const TableNoteRow = ({note, archiveUnarchiveCB, removeNoteCB, showEditFormCB}: {
    note: NoteType,
    archiveUnarchiveCB: any,
    removeNoteCB: any,
    showEditFormCB: any
}) => {
    return (
        <div className={`${styles.tableRow} ${styles.tableNoteRow}`}>
            <div className={styles.iconBlock}>
                <img className={styles.iconImg} src={icons.get(note.category)} alt="cart"/>
            </div>
            <span className={styles.info}>{note.name}</span>
            <span className={styles.info}>{note.created}</span>
            <span className={styles.info}>{note.category}</span>
            <span className={`${styles.noteContent} ${styles.info}`}>{note.content}</span>
            <span className={styles.info}>{note.dates}</span>
            <div className={styles.tools}>
                {!note.archived ?
                    <span>
            <button className={styles.toolButton} onClick={() => showEditFormCB(note.id)}>
    <img className={styles.toolImg} src={pencil} alt="edit"/>
        </button>
        </span>
                    :
                    <div className={styles.toolButton}>
                    </div>
                }
                <span>
        <button className={styles.toolButton} onClick={() => archiveUnarchiveCB(note.id)}>
    <img className={styles.toolImg}
         src={note.archived ? unarchiveTool : archiveTool}
         alt={note.archived ? 'unarchive' : 'archive'}/>
    </button>
    </span>
                <span>
    <button className={styles.toolButton} onClick={() => removeNoteCB(note.id)}>
    <img className={styles.toolImg} src={trashBin} alt="trash"/>
        </button>
        </span>
            </div>
        </div>
    )
}

export default TableNoteRow