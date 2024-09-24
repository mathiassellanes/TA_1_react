import { useContext } from "react"
import { ThemeContext } from "../App"

const UserInfo = () => {
  const { isLight } = useContext(ThemeContext)

  return (
    <div className={`user-card ${isLight ? 'user-card-dark' : ''}`}>
      Mathias Sellanes
    </div>
  )
}

export default UserInfo
