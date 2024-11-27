import styles from "./AddButton.module.css"

const AddButton = ({handleAddClick}) => {
  return (
    <div>
        <button className={styles.add} onClick={handleAddClick}>Adicionar</button>
    </div>
  )
}

export default AddButton