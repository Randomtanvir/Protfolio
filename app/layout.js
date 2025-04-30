import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import ThemeProvider from "@/provider/ThemeProvider";

const MerriweatherFont = Merriweather({
  variable: "--font-merriweather", // Unique variable name
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  title: "Tanvir's Portfolio",
  description: "Showcasing my work and projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body
          className={`${MerriweatherFont.className} relative min-h-screen w-full dark:bg-[#0a0f1d] bg-[#F9FAFB] dark:text-white text-gray-600 overflow-x-hidden`}
        >
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('/mainbg.svg')] bg-cover bg-center opacity-50"></div>
            {/* Gradient Orbs */}
            <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full dark:bg-blue-500 bg-amber-300 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full dark:bg-indigo-500 bg-teal-500 opacity-20 blur-3xl"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
