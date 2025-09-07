import Image from "next/image";
import SingUp from "./_components/SingUp";
import { ChevronLeft } from "lucide-react";
import BackButton from "./_components/BackButton";

export default function SignUpPage() {
  return (
    <main className="bg-white dark:bg-[#040B19]">
      <BackButton />
      <div className="container mx-auto">
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* Right Side - Illustration */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 bg-white dark:bg-[#040B19] transition-colors">
            <Image
              src="/img/sign-up.svg"
              alt="Login illustration"
              width={600}
              height={600}
              className="max-w-full h-auto rounded-2xl"
            />
          </div>
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-10 bg-white dark:bg-[#040B19] transition-colors duration-300">
            {/* Logo */}
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                Create New Admin
              </h1>
            </div>

            <h2 className="text-3xl font-semibold mb-2 text-gray-900 dark:text-white text-center md:text-left">
              Welcome back
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-center md:text-left">
              Please enter your details
            </p>

            <SingUp />

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 text-center md:text-left">
              Login to the admin panel and customize your information.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
