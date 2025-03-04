import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundSvg from "@/svg/BackgroundSvg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative dark:text-white text-gray-600 min-h-screen flex flex-col items-center p-4 bg-[#0a0f1d]`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased relative dark:text-white text-gray-600 min-h-screen flex flex-col items-center p-4 dark:bg-[#0a0f1d] bg-[#6d6e6d7c]`}
      >
        {/* Background Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <BackgroundSvg className="absolute inset-0 w-full h-full" />
        </div>
        {/* Blurred Circle Effect */}
        <div
          className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full bg-blue-500  opacity-10 blur-3xl"
          //  className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full dark:bg-blue-500 bg-amber-300  opacity-10 blur-3xl"
        ></div>
        <div
          className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-indigo-500 opacity-10 blur-3xl"
          //  className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full dark:bg-indigo-500 bg-teal-500 opacity-10 blur-3xl"
        ></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
