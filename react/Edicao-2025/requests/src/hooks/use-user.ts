import React, { useCallback, useState } from "react";
import { api, fetcher } from "../helpers/api";
import type { User } from "../Models/user";

export default function UseUser() {
  const [user, setUser] = React.useState<User>();
  const [users, setUsers] = React.useState<User[]>([]);
  const [requestStatus, setRequestStatus] = useState<"idle" | "loading" | "saving">("idle");
  
  const getUser = useCallback(async (usersName: string) => {
    try {
      setRequestStatus("loading");
      const data = await fetcher(`users/${usersName}`);
      setUser(data);
    } catch (error) {
      console.log(error);
      alert("Erro ao buscar usuário");
    } finally {
      setRequestStatus("idle");
    }
  }, []);

   const getUsers = useCallback(async () => {
    try {
      setRequestStatus("loading");
      const data = await fetcher(`users`);
      setUsers(data);
    } catch (error) {
      alert("Erro ao buscar usuário");
    } finally {
      setRequestStatus("idle");
    }
  }, []);

  async function createUser(userData: User) {
    try {
      setRequestStatus("saving");

      await api("users", {method: "POST", body: JSON.stringify(userData)})
      
      alert("Sucesso ao cadastrar usuário");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
    }finally{
      setRequestStatus("idle");
    }
  }

  return {
    user,
    userRequestStatus: requestStatus,
    getUser,
    getUsers,
    users,
    createUser
  };
}
