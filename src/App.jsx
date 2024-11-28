import { useState } from 'react'
import './App.css'
import AddButton from './components/AddButton'
import SubtractButton from './components/SubtractButton'
import ResetButton from './components/ResetButton'

function App() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubtract = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }


  return (
    <div className='card'>
      <div className='counter'>
        <img src="../public/react.svg" alt="" />
        <p>Contador: {count}</p>
      </div>
      <div className="buttons">
        <SubtractButton handleSubtractClick={handleSubtract}/>
        <ResetButton handleResetClick={handleReset}/>
        <AddButton handleAddClick={handleAdd}/>
      </div>
    </div>
  )
}

export default App
