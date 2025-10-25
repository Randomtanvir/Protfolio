import MainComponent from "./_components/MainComponent";
import { getProfileInfo } from "@/utils/profile";

const ProfilePage = async () => {
  let profile = {};

  // try {
  //   profile = (await getProfileInfo()) || {}; // runtime fetch
  // } catch (error) {
  //   console.error("Failed to fetch profile info:", error);
  //   profile = {}; // fallback
  // }

  return (
    <>
      <MainComponent profile={profile || {}} />
    </>
  );
};

export default ProfilePage;
