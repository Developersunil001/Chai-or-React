import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  let addCount = () => {
    console.log("Added!")
    if (count < 10) {
      setCount((addCount) => addCount + 1);
    }
  }

  let removeCount = () => {
    console.log("Removed!")
    if (count > 0) {
      setCount((removeCount) => removeCount - 1);
    }
  }

  return (
    <>
      <h1>counter project {count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={removeCount}>Remove</button>
    </>
  )
}

export default App
