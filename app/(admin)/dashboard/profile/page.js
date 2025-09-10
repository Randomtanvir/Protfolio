import { getProfileInfo } from "@/utils/profile";
import MainComponent from "./_components/MainComponent";

const ProfilePage = async () => {
  const profile = await getProfileInfo();
  return (
    <>
      <MainComponent profile={profile} />
    </>
  );
};

export default ProfilePage;
