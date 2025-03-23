import Perfil from "@/components/herosection/Perfil";
import Info from "@/components/herosection/Info";
import About from "@/components/herosection/About";
import Skills from "@/components/herosection/Skills";

export default function Home() {
  return (
    <>
      <section className="pt-8 pb-8">
        <div className="justify-center p-5 md:grid-cols-[350px_350px] items-start md:p-5 lg:mx-auto lg:grid-cols-[300px_560px_300px] xl:items-stretch gap-6 grid">
          <Perfil />
          <Info />
          <About />
          <Skills />
        </div>
      </section>
    </>
  );
}
