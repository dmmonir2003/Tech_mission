// "use client";

// import React from "react";
// import CustomButton from "../CustomButton";
// import { useRouter } from "next/navigation";
// import Chatbot from "@/components/chat/Chatbot";
// import { Header } from "./header";

// // --- TYPE DEFINITIONS ---
// interface Slide {
//   image: string;
//   pretitle: string;
//   title: string;
// }

// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: "primary" | "outline";
//   className?: string;
// }

// // --- SLIDER DATA ---
// const slides: Slide[] = [
//   // {
//   //   image:
//   //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
//   //   pretitle: "Engineer the Future.",
//   //   title: " ",
//   // },

//   {
//     image:
//       "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop",
//     pretitle: "Driving Results Through Technology",
//     title: "Innovative Digital Solutions",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
//     pretitle: "Your Partner in Success",
//     title: "Expert Strategy & Consulting",
//   },

//   {
//     image:
//       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
//     pretitle: "Better Insights For Business Growth",
//     title: "Creative Services for your Company",
//   },
// ];

// // --- UI COMPONENTS ---
// const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = "primary",
//   className = "",
// }) => {
//   const baseClasses =
//     "w-[180px] h-[60px] flex items-center justify-center rounded-md transition-all duration-300";

//   const variantClasses = {
//     primary:
//       "bg-gradient-to-r from-[#0E458E] via-[#2F82E8] to-[rgba(0,113,245,0.92)] text-white hover:opacity-90",
//     outline:
//       "bg-transparent text-black border border-[#106CD8] hover:bg-[#106CD8] hover:text-white",
//   };

//   const finalClasses = `
//     ${baseClasses}
//     ${variantClasses[variant]}
//     ${className}
//   `;

//   return (
//     <div className={finalClasses}>
//       <span className="text-lg font-medium font-raleway tracking-wide">
//         {children}
//       </span>
//     </div>
//   );
// };

// // --- HERO SECTION ---
// export function Hero() {
//   const [currentSlide, setCurrentSlide] = React.useState(0);
//   const router = useRouter();

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-[520px] h-[85vh] md:h-screen w-full overflow-hidden bg-white">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,57,114,0.3)] to-[rgba(36,136,193,0.3)]" />
//         </div>
//       ))}

//       <div className="relative h-full w-full">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute bottom-0 left-0 right-0 md:left-auto md:right-auto w-full md:w-auto p-4 transition-opacity duration-1000 ease-in-out ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div className="bg-[rgba(235,242,251,0.8)] backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-lg max-w-xl mx-auto md:mx-0">
//               <div className="flex flex-col gap-5 md:gap-8">
//                 <div className="flex flex-col gap-4">
//                   <h2 className="text-[#072D5B] text-2xl font-semibold font-lato">
//                     {slide.pretitle}
//                   </h2>
//                   <h1 className="text-[#16192C] text-4xl md:text-5xl font-bold font-raleway leading-tight">
//                     {slide.title}
//                   </h1>
//                 </div>
//                 <div className="flex flex-col sm:flex-row items-center gap-6">
//                   <CustomButton
//                     variant="primary"
//                     onClick={() => router.push("/services")}
//                   >
//                     OUR SERVICES
//                   </CustomButton>
//                   <CustomButton
//                     variant="outline"
//                     onClick={() => router.push("/quote")}
//                   >
//                     GET A QUOTE
//                   </CustomButton>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default function App() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Google Fonts Import */}
//       <style>
//         {`
//           @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&family=Lato:wght@400;600&display=swap');
//           .font-raleway { font-family: 'Raleway', sans-serif; }
//           .font-lato { font-family: 'Lato', sans-serif; }
//         `}
//       </style>
//       <main className="relative overflow-hidden">
//         <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Welcome to TechMission
//             </h1>
//             <p className="text-lg text-gray-600">
//               Your header with background image is ready!
//             </p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";

import React from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";

interface Slide {
  image: string;
  pretitle: string;
  title: string;
}

const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop",
    pretitle: "Driving Results Through Technology",
    title: "Innovative Digital Solutions",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    pretitle: "Your Partner in Success",
    title: "Expert Strategy & Consulting",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    pretitle: "Better Insights For Business Growth",
    title: "Creative Services for your Company",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const router = useRouter();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[min(74svh,600px)] min-h-[420px] w-full overflow-hidden bg-white sm:min-h-[520px] sm:h-[85vh] md:h-screen">
      {/* Slide Images Background */}
      {slides.map((slide, index) => (
        <div
          key={`bg-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-[58%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,57,114,0.3)] to-[rgba(36,136,193,0.3)]" />
        </div>
      ))}

      {/* Content - Only render active slide */}
      <div className="absolute inset-0 h-full w-full flex items-end">
        <div className="w-full md:w-auto p-3 sm:p-6 lg:p-8">
          <div className="bg-[rgba(235,242,251,0.88)] backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 shadow-xl max-w-xl mx-auto md:mx-0">
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-8">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h2 className="text-[#072D5B] text-base sm:text-lg md:text-xl font-semibold font-lato">
                  {slides[currentSlide].pretitle}
                </h2>
                <h1 className="text-[#16192C] text-2xl sm:text-3xl md:text-4xl font-bold font-raleway leading-tight">
                  {slides[currentSlide].title}
                </h1>
              </div>
              <div className="grid grid-cols-2 items-stretch gap-2 sm:flex sm:items-center sm:gap-3">
                <CustomButton
                  variant="primary"
                  onClick={() => router.push("/services")}
                  className="w-full sm:w-auto min-h-11 sm:min-h-0 px-2 sm:px-4 text-xs sm:text-sm"
                >
                  OUR SERVICES
                </CustomButton>
                <CustomButton
                  variant="outline"
                  onClick={() => router.push("/quote")}
                  className="w-full sm:w-auto min-h-11 sm:min-h-0 px-2 sm:px-4 text-xs sm:text-sm"
                >
                  GET A QUOTE
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700&family=Lato:wght@400;600&display=swap');
          .font-raleway { font-family: 'Raleway', sans-serif; }
          .font-lato { font-family: 'Lato', sans-serif; }
        `}
      </style>
      <main className="relative overflow-hidden">
        <Hero />
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to TechMission
            </h1>
            <p className="text-lg text-gray-600">
              Your header with background image is ready!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
