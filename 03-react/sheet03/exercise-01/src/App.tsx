import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function countUp() {
    setCount(previous => ++previous);
  }
  return (
    <>
      <section>
        <button onClick={countUp}>{count}</button>
      </section>
    </>
  )
}

export default App
