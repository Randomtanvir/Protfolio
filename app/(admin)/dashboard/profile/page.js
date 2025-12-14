import { getProfileInfo } from "@/actions/fetcher";
import MainComponent from "./_components/MainComponent";

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
