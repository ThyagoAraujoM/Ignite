import { useRef } from "react";
import type { User } from "../Models/user";
import UseUser from "../hooks/use-user";

export default function AddUser() {
  const formRef = useRef<HTMLFormElement>(null);
  const {createUser, userRequestStatus, getUsers} = UseUser()


  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    if(!formRef.current){
      return;
    }
    let data = new FormData(formRef.current);
    
    const payload = {
      id: Math.random().toString(36).substring(2, 10),
      name: data.get("name")
    }

    await createUser(payload as User);

    getUsers();
  }

  return (
    <div>
      <div>Criar usuários</div>
      <form onSubmit={onSubmit} ref={formRef}>
        <div>
          <input placeholder="Username" type="text" required name="name" />
        </div>

        <button disabled={userRequestStatus == "saving"}>
          {userRequestStatus == "idle" ? "Criar" : "Criando..."}
        </button>
      </form>
    </div>
  );
}
