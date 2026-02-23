import ProfilePage from "@/components/profile/ProfilePage";
import { getCurrentUserAction } from "@/_lib/authServerActions";

export default async function Profile() {
  const user = await getCurrentUserAction()

  return (
    <>
      <ProfilePage user={user}/>
    </>
  );
}