import { getAboutInfo } from "@/utils/about";
import MainAboutComponent from "./_components/MainAboutComponent";

export default async function AboutPage() {
  const aboutInfo = await getAboutInfo();

  return (
    <div>
      <MainAboutComponent aboutInfo={aboutInfo} />
    </div>
  );
}
