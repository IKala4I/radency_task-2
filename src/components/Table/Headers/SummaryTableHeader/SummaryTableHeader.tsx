import styles from '../Headers.module.css'

const SummaryTableHeader = () => {
    return (
        <div className={`${styles.tableHeader} ${styles.summaryTableHeader}`}>
            <div></div>
            <h4>Note Category</h4>
            <h4>Active</h4>
            <h4>Archived</h4>
        </div>
    )
}
export default SummaryTableHeader