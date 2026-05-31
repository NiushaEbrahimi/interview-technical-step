import UsersPage from "@/components/users/UsersPage";
import { getUsers } from "@/_lib/services/getData";

// TODO: Needs design and loading state

export default async function Users() {

  const users = await getUsers({limit:0,recent:false});

  return (
    <UsersPage users={users.users} />
  );
}