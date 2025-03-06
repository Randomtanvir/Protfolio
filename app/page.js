import Image from "next/image";
import { Button } from "@/components/ui/button";
import Tanvir_img from "@/public/img/home-perfil.png";
import Image2 from "@/public/img/about-perfil.png";
import Link from "next/link";
import { FacebookIcon, GithubIcon, LinkdinIcon } from "@/svg/Icon";

export default function Home() {
  return (
    <>
      <section className="home section" id="home">
        <div className="sm:grid-cols-2 lg:grid-cols-[180px_560px_280px] sm:items-start lg:items-stretch container grid">
          {/* <!--===== PERFIL =====--> */}
          <div className="relative sm:h-full  bg-red-500 h-[415px] rounded-2xl p-4 grid overflow-hidden lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:p-8">
            <Image
              className="w-[250px] absolute self-end justify-self-center "
              alt="Tanvir_Ahmad"
              src={Tanvir_img}
            />
            <div className="self-end bg-black/10 backdrop-blur-lg px-6 py-4 rounded-3xl border border-white/70">
              <h1 className="text-xl text-white mb-4">Tanvir Ahmad</h1>
              <div className="grid gap-x-2 grid-cols-2 ">
                <Button>Project</Button>
                <Button variant="secondary">Services</Button>
              </div>
            </div>
          </div>

          {/* <!--===== INFO =====--> */}
          <div className="bg-gray-500 px-8 py-6 rounded-4xl lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1">
            <div className="flex justify-center items-center gap-x-2 ">
              <div className="w-8 h-8 rounded-[50%] bg-red-500"></div>
              <h1 className="text-base "> Tanvir Ahmad</h1>
            </div>
            <div className="h-[180px] rounded-4xl grid my-6 overflow-hidden bg-indigo-400 ">
              <Image
                className="w-[140px] self-end justify-self-center "
                alt="tanvr"
                src={Image2}
              />
            </div>
            <p className="font-xs mb-8">
              Passionate about creating and designing websites with the best
              engaging interfaces.
            </p>
            <Button className="bg-indigo-600 w-full text-white">
              Download CV
            </Button>
          </div>

          {/* <!--===== ABOUT =====--> */}
          <div className="bg-gray-500 px-8 py-6 rounded-4xl ">
            <h3 className="font-xl mb-4">
              Tanvir Ahmad - <b>Web Designer & Developer</b>
            </h3>
            <p className="about_description">
              Located in Peru, I have several years of experience in web
              development and design, carrying out several successful projects.
            </p>
            <div className="flex justify-center gap-x-6 my-8">
              <Link
                className="w-10 h-10 bg-white text-black text-xl rounded-[50%] grid place-items-center transition-all hover:bg-indigo-500 z-10 cursor-pointer hover:text-white"
                href="#"
              >
                <LinkdinIcon />
              </Link>
              <Link
                className="w-10 h-10 bg-white text-black text-xl rounded-[50%] grid place-items-center transition-all hover:bg-indigo-500 z-10 cursor-pointer hover:text-white"
                href="#"
              >
                <GithubIcon />
              </Link>
              <Link
                className="w-10 h-10 bg-white text-black text-xl rounded-[50%] grid place-items-center transition-all hover:bg-indigo-500 z-10 cursor-pointer hover:text-white"
                href="#"
              >
                <FacebookIcon />
              </Link>
            </div>
            <div className="bg-green-400 h-[180px] rounded-4xl overflow-hidden ">
              <img
                alt="logo"
                src="/img/about-perfil.png"
                className="w-[250px] justify-self-center -translate-y-10  "
              />
            </div>
            <p className="text-xs mt-4 mb-8 ">
              He doesn&apos;t write messages on social networks, send me an
              email and I&apos;ll answer you.
            </p>
            <Button>Contact Me</Button>
          </div>

          {/* <!--===== SKILLS =====--> */}
          <div className="bg-gray-500 px-8 py-6 rounded-4xl mb-20">
            <h2 className="text-xl">Skills</h2>
            <div className="flex flex-wrap items-center gap-12 my-2">
              <img
                src="/img/skills-html.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
              <img
                src="/img/skills-css.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
              <img
                src="/img/skills-javascript.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
              <img
                src="/img/skills-react.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
              <img
                src="/img/skills-next.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
              <img
                src="/img/skills-git.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
              <img
                src="/img/skills-github.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
              <img
                src="/img/skills-sass.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
              <img
                src="/img/skills-tailwind-css.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />

              <img
                src="/img/skills-photoshop.svg"
                alt="skill"
                className="w-6 transition-all transform z-10 hover:-translate-y-1"
              />
            </div>
            <p className="text-xs mt-6">
              Visit the projects section to see the work done with these web
              technologies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
