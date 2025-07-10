import UseUsers from "../hooks/use-users";

export default function UsersList() {
  const {users, isLoadingUsers  } = UseUsers();

  if (isLoadingUsers) {
    return <div>Carregando usuários...</div>;
  }

  return (
    <ul>
      {users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </ul>
  );
}
