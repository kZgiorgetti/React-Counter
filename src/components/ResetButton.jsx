import styles from "./ResetButton.module.css"

const ResetButton = ({handleResetClick}) => {
  return (
    <div>
        <button className={styles.resetButton} onClick={handleResetClick}>Resetar</button>
    </div>
  )
}

export default ResetButton