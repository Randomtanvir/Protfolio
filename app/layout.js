import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import ThemeProvider from "@/provider/ThemeProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Tanvir Ahmad | JavaScript Developer",
  description:
    "Welcome to the portfolio of Tanvir Ahmad — a passionate JavaScript Developer specializing in modern web technologies.",

  metadataBase: new URL("https://mabbu.xyz"),

  openGraph: {
    title: "Tanvir Ahmad | JavaScript Developer",
    description:
      "Explore my portfolio to see web applications built with Next.js, React, and Node.js.",
    url: "https://mabbu.xyz",
    siteName: "Tanvir Ahmad Portfolio",
    images: ["https://mabbu.xyz/meta-profile.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanvir Ahmad | JavaScript Developer",
    description:
      "Explore my portfolio to see web applications built with modern JavaScript technologies.",
    images: ["https://mabbu.xyz/meta-profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative min-h-screen w-full dark:bg-[#121316] bg-[#F9FAFB] dark:text-white text-gray-600 overflow-x-hidden`}
      >
        {/* ThemeProvider wraps content inside body */}
        <ThemeProvider>
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[url('/mainbg.svg')] bg-cover bg-center opacity-50"></div>
            <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full dark:bg-blue-500 bg-amber-300 opacity-20 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full dark:bg-indigo-500 bg-teal-500 opacity-20 blur-3xl"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
