import Image from "next/image";
import backpGroundImage from "../../../public/service/teamImageBackground.png";
import TeamSlider from "./TeamSlider";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export default function Team() {
  return (
    <div className="py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="mb-10 md:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway text-center">
          Team
        </h2>
        <p className="text-center text-base md:text-lg text-gray-600 mx-auto mt-2">
          Our Leaders
        </p>
      </div>
      <TeamSlider />
    </div>
  );
}
