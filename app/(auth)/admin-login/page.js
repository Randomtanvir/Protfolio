import Image from "next/image";
import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <main className="bg-white dark:bg-[#040B19]">
      <div className="container mx-auto">
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-10 bg-white dark:bg-[#040B19] transition-colors duration-300">
            {/* Logo */}
            <div className="mb-8 text-center md:text-left">
              <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                Admin Login
              </h1>
            </div>

            <h2 className="text-3xl font-semibold mb-2 text-gray-900 dark:text-white text-center md:text-left">
              Welcome back
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6 text-center md:text-left">
              Please enter your details
            </p>

            <LoginForm />

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 text-center md:text-left">
              Login to the admin panel and customize your information.
            </p>
          </div>

          {/* Right Side - Illustration */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 bg-white dark:bg-[#040B19] transition-colors">
            <Image
              src="/img/login_vector.png"
              alt="Login illustration"
              width={600}
              height={600}
              className="max-w-full h-auto hidden dark:block rounded-2xl"
            />

            <img
              src="https://assets-v2.lottiefiles.com/a/7635dd88-116a-11ee-b318-ffcf40e06a51/3b8KwGTSsy.gif"
              alt="Login Illustration"
              width={600}
              height={600}
              className="dark:hidden"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
