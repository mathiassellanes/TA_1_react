import { useContext } from "react"
import { AppContext } from "../App"

const UserInfo = () => {
  const {
    user: { name, age }
  } = useContext(AppContext)


  return (
    <div className="user-card">
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default UserInfo
