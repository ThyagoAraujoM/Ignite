import { useQuery } from "@tanstack/react-query";
import type { User } from "../Models/user";
import { fetcher } from "../helpers/api";

export default function UseUsers() {
  const queryKey = "users";
  // ["/", "users"]
  const { data, isLoading } = useQuery<User[]>({
    queryKey: queryKey.split("/"),
    queryFn: () => fetcher(queryKey),
  });

  return {
    users: data || [],
    isLoadingUsers: isLoading,
  };
}
