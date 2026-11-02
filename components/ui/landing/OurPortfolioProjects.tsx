"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { LogoLoader } from "../LogoLoader";
import {
  BrainCircuit,
  Briefcase,
  Brush,
  Code,
  Megaphone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { FaAndroid } from "react-icons/fa";
import CustomButton from "../CustomButton";

// --- Reusable Button Component ---

const FilterButton = ({
  text,
  icon,
  isActive,
  onClick,
}: {
  text: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => {
  const baseClasses =
    "flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none hover:cursor-pointer";
  const activeClasses =
    "bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white";
  const inactiveClasses = "bg-white text-gray-800  hover:bg-blue-50";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

// --- Reusable Portfolio Card Component ---

const PortfolioCard = ({
  category,
  imageUrl,
}: {
  category: string;
  imageUrl?: string;
}) => (
  <div className="group relative w-full h-[240px] sm:h-[300px] md:h-[350px] bg-gray-200/50 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
    {/* <div className="absolute top-2 left-0 bg-white shadow-lg rounded-r-full py-2 px-6 z-10">
      <span className="text-gray-800 text-lg font-semibold tracking-wide">
        <div className="flex items-center gap-1">
          <LogoLoader logoColor="#155DFC" customClass="h-6 w-6"></LogoLoader>
          <p
            className="text-sm font-bold m-0 p-0 translate-y-1 text-blue-600"
            style={{
              fontFamily: "BellMT, 'Bell MT'",
            }}
          >
            TechMission
          </p>
        </div>
      </span>
    </div> */}
    <Image
      src={imageUrl || "/placeholder.jpg"}
      alt={`${category} project`}
      width={400}
      height={300}
      className="w-full h-full object-cover   transform group-hover:scale-105 transition-transform duration-300"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src =
          "https://placehold.co/400x300/e2e8f0/334155?text=Image+Error";
      }}
    />
  </div>
);

// --- Main Portfolio Component ---

function OurPortfolioProjects() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { name: "All", icon: <Briefcase className="h-6 w-6" /> },
    { name: "AI & ML Services", icon: <BrainCircuit className="h-6 w-6" /> },
    { name: "App Development", icon: <FaAndroid className="h-6 w-6" /> },
    { name: "Website Development", icon: <Code className="h-6 w-6" /> },
    { name: "Digital Marketing", icon: <Megaphone className="h-6 w-6" /> },
    { name: "Graphics Design", icon: <Brush className="h-6 w-6" /> },
    { name: "Cybersecurity", icon: <ShieldCheck className="h-6 w-6" /> },
  ];

  // Filter portfolio data based on active filter
  const filteredData = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioData;
    }
    return portfolioData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Show only 3 items
  const displayedData = filteredData.slice(0, 3);

  // Handle View More button click
  const handleViewMore = () => {
    // Redirect to portfolio page with the active filter as a query parameter
    if (activeFilter === "All") {
      router.push("/work");
    } else {
      router.push(`/work?category=${encodeURIComponent(activeFilter)}`);
    }
  };

  return (
    <section className="w-full bg-[#F2F2F2] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center ">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            Explore Our Portfolio
          </h1>
          <p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Our Work
          </p>
        </div>

        {/* Filter Buttons Section */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          {filters.map((filter) => (
            <FilterButton
              key={filter.name}
              text={filter.name}
              icon={filter.icon}
              isActive={activeFilter === filter.name}
              onClick={() => setActiveFilter(filter.name)}
            />
          ))}
        </div>

        {/* Portfolio Grid Section */}
        <div className="w-full">
          {displayedData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-4">
              {displayedData.map((item, index) => (
                <PortfolioCard
                  key={index}
                  category={item.category}
                  imageUrl={item?.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}

          {/* View More Button */}
          {filteredData.length > 3 && (
            <div className="flex justify-center mt-12">
              <CustomButton
                variant="primary"
                onClick={handleViewMore}
                className="py-3 px-6 flex items-center gap-2"
              >
                View More
              </CustomButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OurPortfolioProjects;
