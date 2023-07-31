import styles from './ActionButton.module.css'

const ActionButton = ({imgSrc, buttonText, onClickCB}: any) => {
    return (
        <div className={styles.action}>
            <span>
                <img className={styles.actionImg} src={imgSrc} alt='logo'/>
            </span>
            <button className={styles.actionButton} onClick={onClickCB}>{buttonText}</button>
        </div>
    )
}

export default ActionButton