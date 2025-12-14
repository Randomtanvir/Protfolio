import Perfil from "@/components/herosection/Perfil";
import Info from "@/components/herosection/Info";
import About from "@/components/herosection/About";
import Skills from "@/components/herosection/Skills";
import { getProfileInfo } from "@/actions/fetcher";

export default async function Home() {
  let profileInfo = {};

  // try {
  //   profileInfo = (await getProfileInfo()) || {}; // fetch at runtime
  // } catch (err) {
  //   console.error("Failed to fetch profile content:", err);
  //   profileInfo = {};
  // }

  return (
    <>
      <section className="flex items-center justify-center lg:h-screen mb-20 md:mb-0">
        <div className="justify-center p-5 md:grid-cols-[350px_350px] items-start md:p-5 lg:mx-auto lg:grid-cols-[300px_560px_300px] xl:items-stretch gap-6 grid">
          <Perfil profileInfo={profileInfo} />
          <Info profileInfo={profileInfo} />
          <About profileInfo={profileInfo} />
          <Skills profileInfo={profileInfo} />
        </div>
      </section>
    </>
  );
}
