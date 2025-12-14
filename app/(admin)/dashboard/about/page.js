import { getAboutInfo } from "@/actions/fetcher";
import MainAboutComponent from "./_components/MainAboutComponent";

export default async function AboutPage() {
  let aboutInfo = {};

  try {
    aboutInfo = (await getAboutInfo()) || {}; // runtime fetch
  } catch (error) {
    console.error("Failed to fetch about info:", error);
    aboutInfo = {}; // fallback
  }

  return (
    <div>
      <MainAboutComponent aboutInfo={aboutInfo || {}} />
    </div>
  );
}
