import { Merriweather } from "next/font/google";
import "./globals.css";
import BackgroundSvg from "@/svg/BackgroundSvg";
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
          className={`${MerriweatherFont.className} antialiased w-full dark:text-white text-gray-600 min-h-screen flex flex-col items-center dark:bg-[#0a0f1d] bg-[#F9FAFB]`}
        >
          {/* Background Container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <BackgroundSvg className="absolute inset-0 w-full h-full" />
          </div>
          {/* Blurred Circle Effect */}
          <div>
            <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full dark:bg-blue-500 bg-amber-300  opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full dark:bg-indigo-500 bg-teal-500 opacity-20 blur-3xl"></div>
          </div>
          {/* Main Content */}

          <Navbar />
          <main className="overflow-hidden">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
