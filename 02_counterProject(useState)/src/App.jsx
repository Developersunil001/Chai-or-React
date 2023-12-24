import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0)

  let addCount = () => {
    console.log("Added!")
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);


    // if (count < 20) {
    //   setCount((addCount) => addCount + 1);
    // }
  }

  let removeCount = () => {
    console.log("Removed!")
    setCount((removeCount) => removeCount - 1)

    // if (count > 0) {
    //   setCount((removeCount) => removeCount - 1);
    // }
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
