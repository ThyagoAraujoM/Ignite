import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddUser from "./components/addUser";
import Users from "./components/UsersList";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
      <hr />
      <AddUser />
    </QueryClientProvider>
  );
}
