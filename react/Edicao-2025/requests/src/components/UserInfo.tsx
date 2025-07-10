import { useEffect } from "react"
import UseUser from "../hooks/use-user"


export default function UserInfo() {
  const {user, getUser, userRequestStatus} = UseUser()

  useEffect(() => {
    getUser("1")
  }, [getUser])

  if(userRequestStatus === "loading"){
    return <div>Carregando usuário...</div>
  }
  

  return (
    <div>{user?.name}</div>
  )
}
