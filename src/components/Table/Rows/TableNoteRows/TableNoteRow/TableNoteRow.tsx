import {NoteType} from '../../../../../redux/notesReducer'
import styles from '../../Rows.module.css'
import {icons, tools} from '../../../../../imageHelpers'

const TableNoteRow = ({note, archiveUnarchiveCB, removeNoteCB, showEditFormCB}: {
    note: NoteType,
    archiveUnarchiveCB: any,
    removeNoteCB: any,
    showEditFormCB: any
}) => {
    return (
        <div className={`${styles.tableRow} ${styles.tableNoteRow}`}>
            <div className={styles.iconBlock}>
                <img className={styles.iconImg} src={icons[note.category]} alt="cart"/>
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
    <img className={styles.toolImg} src={tools.pencilTool} alt="edit"/>
        </button>
        </span>
                    :
                    <div className={styles.toolButton}>
                    </div>
                }
                <span>
        <button className={styles.toolButton} onClick={() => archiveUnarchiveCB(note.id)}>
    <img className={styles.toolImg}
         src={note.archived ? tools.unarchiveToolGrey : tools.archiveToolGrey}
         alt={note.archived ? 'unarchive' : 'archive'}/>
    </button>
    </span>
                <span>
    <button className={styles.toolButton} onClick={() => removeNoteCB(note.id)}>
    <img className={styles.toolImg} src={tools.trashToolGrey} alt="trash"/>
        </button>
        </span>
            </div>
        </div>
    )
}

export default TableNoteRow