import styles from './TableHeader.module.css'
import archiveTool from '../../assets/images/tools/archive-tool-white.svg'
import trashTool from '../../assets/images/tools/trash-tool-white.svg'

const TableHeader = () => {
    return (
        <div className={styles.tableHeader}>
            <div></div>
            <h4>Name</h4>
            <h4>Created</h4>
            <h4>Category</h4>
            <h4>Content</h4>
            <h4>Dates</h4>
            <div className={styles.tools}>
                <span>
                    <img src={archiveTool} alt="archive"/>
                </span>
                <span>
                    <img src={trashTool} alt="bin"/>
                </span>
            </div>
        </div>
    )
}

export default TableHeader