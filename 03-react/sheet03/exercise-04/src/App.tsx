import { useState } from 'react'
import './App.css'

const initialValue = 0;

function App() {
  const [count, setCount] = useState(initialValue)
  const [visible, setVisible] = useState(true);

  function addValue() {
    setCount(previous => ++previous);
  }

  function subtractValue() {
    setCount(previous => --previous);
  }

  return (
    <>
      <section>
        <h1>{count}</h1>
        {visible && (<>
          <button onClick={subtractValue}>-</button>
          <button onClick={() => setCount(initialValue)}>Reiniciar</button>
          <button onClick={addValue}>+</button>
        </>)}
        < button onClick={() => setVisible(previous => !previous)}>{visible ? "Ocultar controles" : "Mostrar controles"}</button>
      </section>
    </>
  )
}

export default App
