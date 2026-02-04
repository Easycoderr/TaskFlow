import { useAuth } from "../../hooks/useAuth";
import ProfileHeader from "./profileHeader";
import ProfileForm from "./ProfileForm";
import ProfileDangerActions from "./ProfileDangerActions";
function Profile() {
  const { state: user } = useAuth();
  const { display_name: name, email } = user.user.user_metadata;
  return (
    <div className="rounded-md p-4 max-w-2xl  bg-card dark:bg-card-dark flex flex-col gap-6">
      <ProfileHeader email={email} name={name} />
      {/* fields */}
      <ProfileForm name={name} />
      {/* danger zone */}
      <ProfileDangerActions />
    </div>
  );
}

export default Profile;
