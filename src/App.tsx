import { createContext, useState } from 'react'

import UserInfo from './components/userInfo'

import './App.css'
import ChangeUserTheme from './components/changeUserTheme'

type languageName = 'es' | 'en'

type languageType = {
  language: languageName,
  setLanguage: (language: languageName) => void
}

const defaultThemeContext = {
  theme: 'light',
  isLight: true,
  setTheme: () => { },
  toggleTheme: () => { }
}

const defaultLanguageContext = {
  language: 'en',
  setLanguage: () => { }
} as languageType

export const ThemeContext = createContext<{
  theme: string,
  isLight: boolean,
  setTheme: (theme: string) => void
  toggleTheme: () => void
}>(defaultThemeContext)

export const LanguageContext = createContext<languageType>(defaultLanguageContext)

function App() {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState<languageName>('en')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ toggleTheme, theme, setTheme, isLight: theme === 'light' }}>
        <ChangeUserTheme />
        <UserInfo />
      </ThemeContext.Provider>
    </ LanguageContext.Provider>
  )
}

export default App
