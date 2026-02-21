import UsersPage from "@/components/users/UsersPage";

// TODO: Will be moved

const getUsers = async () => {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await res.json();
  return data.users;

}

// TODO: Needs design and loading state

export default async function Users() {

  const users = await getUsers();

  return (
    <UsersPage users={users} />
  );
}