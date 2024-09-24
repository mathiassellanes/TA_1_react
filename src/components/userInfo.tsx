import { useContext } from "react"
import { LanguageContext, ThemeContext } from "../App"

const UserInfo = () => {
  const { isLight } = useContext(ThemeContext)
  const { language } = useContext(LanguageContext)

  return (
    <div className={`user-card ${isLight ? 'user-card-dark' : ''}`}>
      {
        language === 'en' ? 'Hello ' : 'Hola '
      }
      Mathias Sellanes
    </div>
  )
}

export default UserInfo
