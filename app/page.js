import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="">
        {/* Main Card */}
        <div className="max-w-4xl w-full grid md:grid-cols-3 gap-6 relative z-10">
          {/* Sidebar */}
          <div className="bg-gray-900 p-4 rounded-2xl flex flex-col items-center text-center">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={120}
              height={120}
              className="rounded-full border-2 border-red-500"
            />
            <h2 className="text-xl font-semibold mt-3">Xian Gallers</h2>
            <p className="text-gray-400 text-sm mt-2">
              Passionate about creating and designing websites with the best
              engaging interfaces.
            </p>
            <Button className="bg-white text-black mt-4 w-full">
              Download CV
            </Button>
          </div>

          {/* Hero Section */}
          <div className="bg-red-600 p-6 rounded-2xl flex flex-col items-center justify-center relative">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-xl"
            />
            <div className="absolute bottom-4 left-4 bg-gray-800 bg-opacity-50 px-4 py-2 rounded-xl">
              <h1 className="text-2xl font-bold text-white">Xian Gallers</h1>
              <div className="flex gap-2 mt-2">
                <Button className="bg-red-500">Projects</Button>
                <Button className="bg-gray-700">Services</Button>
              </div>
            </div>
          </div>

          {/* Contact & Skills */}
          <div className="bg-gray-900 p-4 rounded-2xl flex flex-col items-center text-center">
            <h3 className="font-bold">
              Xian Gallers -{" "}
              <span className="text-red-500">Web Designer & Developer</span>
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Located in Peru, I have several years of experience in web
              development and design.
            </p>
            <div className="flex gap-3 mt-4">
              {/* Social Icons Placeholder */}
              <span className="w-8 h-8 bg-gray-700 rounded-full"></span>
              <span className="w-8 h-8 bg-gray-700 rounded-full"></span>
              <span className="w-8 h-8 bg-gray-700 rounded-full"></span>
            </div>
            <Button className="bg-red-500 mt-4 w-full">Contact Me</Button>
          </div>
        </div>
      </div>
    </>
  );
}
