import styles from "./SubtractButton.module.css"

const SubtractButton = ({handleSubtractClick}) => {
  return (
    <div>
        <button className={styles.subtract} onClick={handleSubtractClick}>Subtrair</button>
    </div>
  )
}

export default SubtractButton