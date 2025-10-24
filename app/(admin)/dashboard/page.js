import React from "react";
import DashboardSidebar from "./_components/DashboardSidebar";
import MainComponent from "./_components/MainComponent";

const DashboardPage = () => {
  return (
    <div className="relative min-h-screen mt-10">
      {/* Background Effects */}
      {/* <div className="absolute inset-0 bg-[url('/serviceBGlight.svg')] dark:bg-[url('/serviceBG.jpg')] bg-cover bg-center opacity-10 dark:opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-indigo-500/10" /> */}

      {/* Dashboard Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <DashboardSidebar />

        <MainComponent />
      </div>
      <div className="bg-red-300 w-full">
        <iframe
          src="https://res.cloudinary.com/dqslz6ztk/raw/upload/v1761322676/resumes/zhxvcozzxtadzealgtlp.pdf"
          width="100%"
          height="600px"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default DashboardPage;

// -----------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------------

// import React from "react";
// // Import necessary icons
// import { Headset, Crown, TrendingUp, ArrowRight, Code } from "lucide-react";

/**
 * A beautiful, modern Dark Theme Service Card component
 * inspired by Neumorphism/Glassmorphism, featuring gradient "blob" elements.
 */
// const ServiceCardDark = ({
//   title,
//   description,
//   icon: IconComponent,
//   iconColor,
//   blobColor1,
//   blobColor2,
//   ctaText = "Explore",
//   href = "#",
// }) => {
//   return (
//     // Outer Card Container:
//     // Uses dark background color (bg-gray-800) and dark shadow (shadow-2xl)
//     <div
//       className="relative p-8 overflow-hidden bg-gray-800 rounded-2xl shadow-2xl
//                  hover:shadow-3xl transition duration-500 ease-in-out
//                  flex flex-col items-start max-w-xs w-full min-h-[300px]"
//     >
//       {/* Gradient Blob 1 (Top Left) */}
//       <div
//         className="absolute w-24 h-24 rounded-full filter blur-xl opacity-60
//                    transition-all duration-700 -top-8 -left-8"
//         style={{ backgroundColor: blobColor1 }}
//       />

//       {/* Gradient Blob 2 (Bottom Right) */}
//       <div
//         className="absolute w-24 h-24 rounded-full filter blur-xl opacity-60
//                    transition-all duration-700 -bottom-8 -right-8"
//         style={{ backgroundColor: blobColor2 }}
//       />

//       {/* --- Card Content --- */}
//       <div className="relative z-10">
//         {/* Icon Wrapper: Maintains color vibrancy against the dark background */}
//         <div
//           className={`mb-6 p-4 rounded-full flex items-center justify-center`}
//           style={{ backgroundColor: `${iconColor}2A`, color: iconColor }} // Use color with slight transparency for background
//         >
//           <IconComponent className="w-8 h-8" strokeWidth={1.5} />
//         </div>

//         {/* Title: Changed to white text */}
//         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>

//         {/* Short Separator Line */}
//         <div
//           className="w-12 h-1 bg-opacity-70 mb-4 rounded-full"
//           style={{ backgroundColor: iconColor }}
//         />

//         {/* Description: Changed to light gray text */}
//         <p className="text-sm text-gray-400 mb-6 leading-relaxed">
//           {description}
//         </p>

//         {/* CTA Link: Color maintained for vibrancy */}
//         <a
//           href={href}
//           className={`text-sm font-semibold hover:underline flex items-center`}
//           style={{ color: iconColor }}
//         >
//           {ctaText}
//           <ArrowRight className="w-4 h-4 ml-1" />
//         </a>
//       </div>
//     </div>
//   );
// };

// --- Example Usage Component for Dark Theme ---

// const ServiceCardDarkExample = () => {
//   const servicesData = [
//     {
//       id: 1,
//       title: "Customer Service",
//       description:
//         "Customer service is the support you offer your customers that helps them have an easy and enjoyable experience with you.",
//       icon: Headset,
//       iconColor: "#a855f7", // Purple
//       blobColor1: "#c084fc", // Lighter Purple for contrast
//       blobColor2: "#f97316", // Orange
//     },
//     {
//       id: 2,
//       title: "Simple Interface",
//       description:
//         "Easily manage your products within the Shopify admin. Upload your own images or use our free stock photos.",
//       icon: Crown,
//       iconColor: "#f97316", // Orange
//       blobColor1: "#fb7185", // Pinkish Red
//       blobColor2: "#4ade80", // Light Green
//     },
//     {
//       id: 3,
//       title: "Business Tools",
//       description:
//         "Keep track of the status on all orders. Analyze your order history to build better customer relations and target your marketing campaign.",
//       icon: TrendingUp,
//       iconColor: "#10b981", // Emerald Green
//       blobColor1: "#2dd4bf", // Cyan/Teal
//       blobColor2: "#a855f7", // Purple
//     },
//   ];

//   return (
//     // Main container uses a dark background color (bg-gray-900)
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
//       <div className="max-w-7xl mx-auto">
//         {/* Header text is white */}
//         <h2 className="text-3xl font-extrabold text-white text-center mb-12">
//           Our Core Features
//         </h2>
//         {/* Grid layout for displaying cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {servicesData.map((service) => (
//             <ServiceCardDark
//               key={service.id}
//               title={service.title}
//               description={service.description}
//               icon={service.icon}
//               iconColor={service.iconColor}
//               blobColor1={service.blobColor1}
//               blobColor2={service.blobColor2}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceCardDarkExample;

// --- Example Usage Component ---
