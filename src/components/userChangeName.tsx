import { useContext } from "react"
import { AppContext } from "../App"

const UserChangeName = () => {
  const {
    user: { name, age },
    setUser,
  } = useContext(AppContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser?.({ age, name: e.target.value })
  }

  return (
    <input type="text" value={name} onChange={handleChange}/>
  )
}

export default UserChangeName
