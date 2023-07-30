import styles from './ActionButton.module.css'

const ActionButton = ({imgSrc, buttonText}: any) => {
    return (
        <div className={styles.action}>
            <span>
                <img className={styles.actionImg} src={imgSrc} alt='logo'/>
            </span>
            <button className={styles.actionButton}>{buttonText}</button>
        </div>
    )
}

export default ActionButton