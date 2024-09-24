import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [timerValue, setTimerValue] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerValue(timerValue + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <div className='app'>
      <span className='app__counter'>
        Contador: {timerValue}
      </span>
    </div>
  )
}

export default App
