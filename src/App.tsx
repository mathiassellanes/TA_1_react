import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Contador: ${count}`
  }, [count])

  return (
    <div className='app'>
      <span className='app__counter'>
        Contador: {count}
      </span>
      <div className='app__buttons'>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
    </div>
  )
}

export default App
