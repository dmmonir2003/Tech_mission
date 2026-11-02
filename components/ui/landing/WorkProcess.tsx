import { Crown, Medal, ShieldCheck, UserStar } from "lucide-react";
import React from "react";

// Data for the feature cards, including new SVG icons. This keeps the component clean and easy to update.
const services = [
  {
    icon: <Medal />,
    title: "Expertise",
    description:
      "Our team brings years of industry experience and technical mastery, ensuring every project meets the highest standards of innovation and quality.",
  },
  {
    icon: <UserStar />,
    title: "Client-Centric Approach",
    description:
      "We prioritize understanding your unique goals and challenges, delivering personalized solutions that align perfectly with your business vision.",
  },
  {
    icon: <ShieldCheck />,
    title: "Results-Driven Solutions",
    description:
      "We focus on measurable outcomes — building digital products that drive performance, enhance user engagement, and deliver real business impact.",
  },
  {
    icon: <Crown />,
    title: "Collaborative Partnership",
    description:
      "We believe in long-term collaboration, working closely with you at every step to ensure transparency, trust, and shared success.",
  },
];

// Reusable component for each service card
const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-y-4 sm:gap-y-6">
    <div className="flex items-center gap-x-3 sm:gap-x-5">
      <div className="flex-shrink-0 p-2.5 sm:p-4 bg-gradient-to-r from-[#072D5B] via-[#106CD8] to-blue-500/90 text-white rounded-lg [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-6 sm:[&_svg]:w-6">
        {icon}
      </div>
      <h3 className="flex-1 text-lg sm:text-2xl font-medium text-gray-900">{title}</h3>
    </div>
    <p className="text-sm sm:text-lg leading-relaxed text-gray-600">{description}</p>
  </div>
);

function WorkProcess() {
  return (
    <div
      className="py-12 sm:py-16 lg:py-24"
      style={{
        backgroundImage: "url('/whatwedo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:hidden">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_26px_rgba(7,45,91,0.07)]"
            >
              <span className="absolute right-4 top-3 text-3xl font-bold text-slate-100">
                0{index + 1}
              </span>
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#072D5B] via-[#106CD8] to-blue-500 text-white shadow-md shadow-blue-900/20 [&_svg]:h-6 [&_svg]:w-6">
                  {service.icon}
                </div>
                <h3 className="pr-10 text-lg font-semibold leading-snug text-[#072D5B]">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* Responsive grid for services */}
        <div className="mx-auto hidden max-w-6xl border-t border-gray-200 sm:block">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-5 sm:p-8 md:p-12 border-b last:border-b-0 md:last:border-b ${
                  index % 2 === 0 ? "md:border-r" : ""
                } ${index >= 2 ? "md:border-b-0" : ""} border-gray-200`}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
