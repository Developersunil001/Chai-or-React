import './App.css'
import Card from './Components/Card'

function App() {

  let obj = {
    name: "sunil",
    stack: "react"
  }
  // let someArr = [1, 2, 3];

  return (
    <>
      {/* <h1 className='bg-green-400'>hello jii</h1> */}
      <Card channel="chaiorcode" btnText="click me" />
      <Card channel="sunil" />
    </>
  )
}

export default App
