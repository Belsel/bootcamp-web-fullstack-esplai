import { useState } from 'react'
import './App.css'

function App() {
  const [visible, setVisible] = useState(true);

  function handleVisibility() {
    setVisible(previous => !previous);
  }

  return (
    <>
      <section>
        <button onClick={handleVisibility}>{visible ? "Ocultar texto" : "Mostrar texto"}</button>
        {visible && <p>Este texto solo es visible cuando el estado es verdadero</p>}
      </section>
    </>
  )
}

export default App
