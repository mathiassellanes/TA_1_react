import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [responseData, setResponseData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setResponseData(data))
  }, [])

  return (
    <div className='app'>
      <h1>Usuarios</h1>
      <ul>
        {responseData?.map((user: {
          id: number
          name: string
          email: string
        }) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
