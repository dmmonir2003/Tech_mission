"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import backpGroundImage from "../../../public/service/teamImageBackground.png";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  // 🧠 AI & Machine Learning Team
  {
    name: "Dr. Ahsan Rahim",
    role: "AI & Machine Learning Lead",
    image:
      "https://i.postimg.cc/26qB0RJ1/Gemini-Generated-Image-zhxjdxzhxjdxzhxj.png",
    description:
      "AI specialist with over a decade of experience in computer vision and predictive analytics. Leads automation, NLP, and deep learning initiatives for data-driven business innovation.",
  },
  {
    name: "Sadia Rahman",
    role: "AI Research Engineer",
    image:
      "https://i.postimg.cc/dVH1pNGR/Gemini-Generated-Image-4c55wj4c55wj4c55.png",
    description:
      "Researches and develops intelligent AI systems using TensorFlow and PyTorch. Focused on large-scale model training, automation, and innovative machine learning applications.",
  },
  {
    name: "Farid Hossain",
    role: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&auto=format&fit=crop&q=60",
    description:
      "Expert in data visualization and statistical modeling. Uses Python, Power BI, and AI tools to extract actionable insights and optimize business performance.",
  },

  // 🌐 Web Development Team
  {
    name: "Md Moniruzzaman",
    role: "Full Stack Developer (Web Solutions)",
    image:
      "https://i.postimg.cc/5NdcnBG5/Gemini-Generated-Image-mlj9l2mlj9l2mlj9.png",
    // image: "https://i.postimg.cc/4ybTznJf/full-stack-developer.png",
    description:
      "Full stack MERN and PERN developer building secure, scalable web apps. Skilled in TypeScript, Prisma, and PostgreSQL for modern enterprise-grade solutions.",
  },
  {
    name: "Khalid Mahmud",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60",
    description:
      "Frontend developer passionate about clean UI and responsive design. Expert in Next.js, React, and Tailwind CSS for modern, high-performing web interfaces.",
  },
  {
    name: "Tanjila Akter",
    role: "Backend Developer",
    image:
      "https://i.postimg.cc/sf8fyGLH/Gemini-Generated-Image-kpw0kvkpw0kvkpw0.png",
    description:
      "Backend engineer creating robust APIs using Node.js, Express, and MongoDB. Focused on performance, security, and seamless frontend-backend integration.",
  },

  // 🔒 Cybersecurity Team
  {
    name: "Nabila Chowdhury",
    role: "Cybersecurity Specialist",
    image:
      "https://i.postimg.cc/V6WtpBgS/Gemini-Generated-Image-6pprpl6pprpl6ppr-1.png",
    description:
      "Protects enterprise systems through penetration testing, digital defense, and endpoint security. Dedicated to preventing threats and ensuring network resilience.",
  },
  {
    name: "Shakil Ahmed",
    role: "Network Security Engineer",
    image:
      "https://i.postimg.cc/k5m1rw9P/Gemini-Generated-Image-6z0c7z6z0c7z6z0c.png",
    description:
      "Designs and maintains secure network infrastructures. Expert in firewall management, VPN configuration, and enterprise intrusion detection systems.",
  },
  {
    name: "Zarina Islam",
    role: "Ethical Hacker",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60",
    description:
      "Certified Ethical Hacker skilled in vulnerability assessment, penetration testing, and securing cloud-based infrastructure for digital safety.",
  },

  // 📱 App Development Team
  {
    name: "Arif Mahmud",
    role: "Mobile App Developer",
    image:
      "https://i.postimg.cc/43f07wMk/Gemini-Generated-Image-chtnkpchtnkpchtn.png",
    description:
      "Develops cross-platform apps using React Native and Flutter. Creates smooth, intuitive, and performance-driven mobile experiences for users.",
  },
  {
    name: "Rafiul Islam",
    role: "Android Engineer",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60",
    description:
      "Android developer specializing in Kotlin and Jetpack Compose. Builds modern, scalable, and responsive Android applications with clean architecture.",
  },
  {
    name: "Fatema Noor",
    role: "iOS Developer",
    image:
      "https://i.postimg.cc/Prn2v2pv/Gemini-Generated-Image-rgngeprgngeprgng.png",
    description:
      "iOS engineer experienced in Swift and SwiftUI. Focused on elegant design, performance, and user-friendly mobile app development.",
  },

  // 🎨 Graphics & UI/UX Design Team
  {
    name: "Farzana Akter",
    role: "Graphics Design Lead",
    image:
      "https://i.postimg.cc/Rh2rwftR/Gemini-Generated-Image-xjx52kxjx52kxjx5.png",
    description:
      "Creative design leader producing digital visuals and marketing assets. Skilled in Figma and Adobe Creative Suite for brand excellence.",
  },
  {
    name: "Sara Ahmed",
    role: "UI/UX Designer",
    image:
      "https://i.postimg.cc/ZYW5vLtd/Gemini-Generated-Image-vzqq6cvzqq6cvzqq.png",
    description:
      "Designs intuitive and visually appealing interfaces. Applies human-centered design to create accessible and engaging digital experiences.",
  },
  {
    name: "Rashedul Karim",
    role: "3D & Motion Graphics Artist",
    image:
      "https://i.postimg.cc/qRdx67g2/Chat-GPT-Image-Oct-30-2025-07-30-30-AM.png",
    description:
      "3D artist and motion designer using Blender and After Effects. Delivers dynamic visuals and animations for web and marketing.",
  },

  // 📈 Digital Marketing Team
  {
    name: "Tanvir Hasan",
    role: "Digital Marketing Manager",
    image:
      "https://i.postimg.cc/GtnMJQ2z/Gemini-Generated-Image-lw5yb0lw5yb0lw5y.png",
    description:
      "Drives SEO, PPC, and content strategies to boost digital reach. Expert in growth campaigns and performance optimization.",
  },
  {
    name: "Jannatul Ferdous",
    role: "Social Media Strategist",
    image:
      "https://i.postimg.cc/D0hWcJKv/Chat-GPT-Image-Oct-30-2025-07-49-09-AM.png",
    description:
      "Creates and manages social media campaigns that build brand engagement. Skilled in analytics and influencer collaboration.",
  },
  {
    name: "Imran Hossain",
    role: "Content & SEO Specialist",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=60",
    description:
      "Optimizes digital content for search engines. Crafts persuasive copy that enhances traffic, visibility, and brand authority.",
  },

  // ⚙️ Operations & Coordination
  {
    name: "Nusrat Jahan",
    role: "Project Coordinator",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60",
    description:
      "Ensures seamless coordination between clients and teams. Manages project timelines, communication, and delivery quality.",
  },
  {
    name: "Riyad Khan",
    role: "DevOps Engineer",
    image:
      "https://i.postimg.cc/5NdcnBG5/Gemini-Generated-Image-mlj9l2mlj9l2mlj9.png",
    description:
      "Implements CI/CD pipelines, Docker, and AWS infrastructure. Maintains system reliability, scalability, and efficient deployment automation.",
  },
];

const TeamSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full mx-auto  ">
      <Swiper
        modules={[Autoplay]}
        loop
        centeredSlides
        slidesPerView={5}
        spaceBetween={2}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20, centeredSlides: true },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 5, spaceBetween: 30 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {teamMembers.map((member, index) => {
          const isActive = index === activeIndex;
          const isPrev =
            index ===
            (activeIndex - 1 + teamMembers.length) % teamMembers.length;
          const isNext = index === (activeIndex + 1) % teamMembers.length;

          let scale = 0.75;
          if (isActive) scale = 0.95;
          else if (isPrev || isNext) scale = 0.8;

          return (
            <SwiperSlide
              key={index}
              className={`flex justify-center pb-5 ${isNext ? "" : ""}`}
            >
              <motion.div
                style={{ scale }}
                className={`max-w-[320px] relative w-full mx-auto flex flex-col justify-start items-center transition-all duration-500 rounded-[20px] shadow-lg`}
              >
                {/* Top Blue Background */}
                <div
                  className={`w-full max-w-[320px] h-44 ${
                    isActive
                      ? "bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white relative rounded-bl-[100px]   rounded-br-[100px] border"
                      : ""
                  }  overflow-hidden`}
                ></div>

                {/* Background Image + Avatar */}
                <div className="w-full max-w-[320px] -mt-34 relative mx-auto flex flex-col justify-start items-center gap-4">
                  <div className="w-full max-w-[320px] h-44 relative overflow-hidden">
                    <Image
                      src={backpGroundImage}
                      alt="Background"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Avatar */}
                  <img
                    className="w-28 h-28 relative -mt-38 rounded-full border-[5px] border-blue-600 object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                {/* Content */}
                <div className="self-stretch p-2.5 flex flex-col justify-start items-start gap-2.5">
                  <div className="self-stretch flex flex-col justify-start items-center gap-8">
                    <div className="px-6 pb-6">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl sm:text-3xl font-bold font-raleway text-gray-800">
                          {member.name}
                        </h3>
                        <p className="text-xl font-semibold text-blue-600 mt-1">
                          {member.role}
                        </p>

                        <div className="flex justify-center items-center space-x-1 mt-4">
                          <div className="w-14 h-1.5 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 rounded-md"></div>
                          <div className="w-5 h-1.5 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 rounded-md"></div>
                        </div>
                      </div>

                      <div className="self-stretch text-center text-black text-lg font-normal font-['Lato'] leading-tight">
                        {member.description}
                      </div>

                      {/* Social Icons */}

                      {/* <div className="flex justify-center py-5 space-x-4">
                      
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.07 9.07 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.13A12.8 12.8 0 013 2.89a4.52 4.52 0 001.4 6.03 4.51 4.51 0 01-2.05-.56v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.53 4.53 0 004.23 3.14A9.05 9.05 0 012 19.54a12.77 12.77 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.42-.01-.63A9.18 9.18 0 0023 3z" />
                          </svg>
                        </div>

                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                          </svg>
                        </div>

                       
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                          </svg>
                        </div>

                        
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.6 4.61a8.5 8.5 0 011.93 5.31c-.28-.05-3.1-.63-5.94-.27-.07-.14-.12-.29-.18-.44a25.4 25.4 0 00-.56-1.23c3.14-1.28 4.57-3.12 4.76-3.36zM12 3.48c2.17 0 4.15.81 5.66 2.15-.15.22-1.44 1.94-4.48 3.08-1.4-2.57-2.95-4.68-3.19-5A8.69 8.69 0 0112 3.48z" />
                          </svg>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
