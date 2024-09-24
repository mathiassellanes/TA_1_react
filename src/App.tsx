import { createContext, useState } from 'react'

import './App.css'
import UserInfo from './components/userInfo'
import UserChangeName from './components/userChangeName'


const defaultContext = {
  user: {
    name: 'John Doe',
    age: 25
  },
}

export const AppContext = createContext<{
  user: {
    name: string
    age: number
  }
  setUser?: (user: { name: string, age: number }) => void
}>(defaultContext)

function App() {
  const [user, setUser] = useState(defaultContext.user)

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <UserChangeName />
      <UserInfo />
    </AppContext.Provider>
  )
}

export default App
