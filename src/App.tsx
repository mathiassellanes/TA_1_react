import { useState } from 'react'

import './App.css'

function App() {
  const [showText, setShowText] = useState(true)

  return (
    <div className='app'>
      {
        showText && (
          <span className='app__counter'>Texto para mostrar</span>
        )
      }
      <button onClick={() => setShowText((prev) => !prev)}>
        {
          showText ? 'Ocultar' : 'Mostrar'
        }
      </button>
    </div>
  )
}

export default App
