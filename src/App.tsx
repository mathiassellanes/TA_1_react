import { createContext, useState } from 'react'

import UserInfo from './components/userInfo'

import './App.css'
import ChangeUserTheme from './components/changeUserTheme'

const defaultThemeContext = {
  theme: 'light',
  isLight: true,
  setTheme: () => {},
  toggleTheme: () => {}
}

export const ThemeContext = createContext<{
  theme: string,
  isLight: boolean,
  setTheme: (theme: string) => void
  toggleTheme: () => void
}>(defaultThemeContext)

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{toggleTheme, theme, setTheme, isLight: theme === 'light' }}>
      <ChangeUserTheme />
      <UserInfo />
    </ThemeContext.Provider>
  )
}

export default App
