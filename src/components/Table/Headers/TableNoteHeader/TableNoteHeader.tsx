import styles from '../Headers.module.css'
import archiveTool from '../../../../assets/images/tools/archive-tool-white.svg'
import trashTool from '../../../../assets/images/tools/trash-tool-white.svg'

const TableNoteHeader = () => {
    return (
        <div className={`${styles.tableHeader} ${styles.tableNoteHeader}`}>
            <div></div>
            <h4>Name</h4>
            <h4>Created</h4>
            <h4>Category</h4>
            <h4>Content</h4>
            <h4>Dates</h4>
            <div className={styles.tools}>
                 <span className={styles.toolImg}>
                </span>
                <span>
                    <img className={styles.toolImg} src={archiveTool} alt="archive"/>
                </span>
                <span>
                    <img className={styles.toolImg} src={trashTool} alt="bin"/>
                </span>
            </div>
        </div>
    )
}

export default TableNoteHeader