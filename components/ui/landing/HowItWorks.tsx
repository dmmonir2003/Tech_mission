// components/HowItWorks.jsx

import { howItWorksData } from "@/json";

// A sub-component for each step card for cleaner code
const WorkStepCard = ({ icon, title, description, isActive }: any) => {
  const cardClasses = isActive
    ? "bg-white shadow-2xl scale-105 border-transparent"
    : "bg-white/70 backdrop-blur-sm border-gray-200";

  const titleClasses = isActive ? "text-brand-primary" : "text-gray-800";
  const dividerClasses = isActive ? "bg-brand-primary" : "bg-gray-300";

  return (
    <div
      className={`relative min-h-0 sm:min-h-[380px] lg:h-[450px] p-4 sm:p-8 text-left sm:text-center grid grid-cols-[44px_minmax(0,1fr)] gap-x-3 gap-y-2 sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-4 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-105 ${cardClasses}`}
    >
      <div className="row-span-2 shrink-0 self-start bg-white p-1.5 sm:p-5 rounded-full mb-0 sm:mb-2 shadow-sm [&_svg]:h-10 [&_svg]:w-10 sm:[&_svg]:h-[86px] sm:[&_svg]:w-[86px]">
        {icon}
      </div>
      <div className="contents sm:flex sm:min-w-0 sm:flex-col sm:items-center sm:gap-4">
        <h3 className={`col-start-2 row-start-1 text-base sm:text-2xl font-semibold font-lato leading-snug ${titleClasses}`}>
          {title}
        </h3>
        <div className={`col-start-2 row-start-2 h-1 w-14 sm:w-20 rounded-full ${dividerClasses}`} />
        <p className="col-span-2 row-start-3 text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-12 sm:py-16 lg:py-24 bg-gray-100 overflow-hidden "
    >
      {/* Background Image */}
      <img
        src="/howitworkbg.png" // Replace with your background image in the `public` folder
        alt="Abstract background"
        className="absolute inset-0 w-full h-full object-cover -z-0 opacity-20"
      />

      <div className="relative container mx-auto px-4 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway">
            {howItWorksData.title}
          </h2>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-700 font-lato">
            {howItWorksData.subtitle}
          </p>
        </div>

        <div
          aria-label="Project process steps. Swipe horizontally to explore."
          className="sm:hidden -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
        >
          {howItWorksData.steps.map((step, index) => (
            <article
              key={step.title}
              className="relative flex w-[min(84vw,340px)] shrink-0 snap-center flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-lg shadow-blue-950/5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 [&_svg]:h-12 [&_svg]:w-12">
                  {step.icon}
                </div>
                <span className="rounded-full bg-[#072D5B] px-3 py-1 text-xs font-semibold tracking-widest text-white">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl font-semibold leading-snug text-[#072D5B]">
                {step.title}
              </h3>
              <div className="my-3 h-1 w-14 rounded-full bg-gradient-to-r from-[#072D5B] to-[#387FD2]" />
              <p className="flex-1 text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
              <div className="mt-5 flex items-center gap-2" aria-hidden="true">
                {howItWorksData.steps.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-1 rounded-full transition-all ${
                      dotIndex === index
                        ? "w-7 bg-[#106CD8]"
                        : "w-2 bg-gray-200"
                    }`}
                  />
                ))}
                <span className="ml-auto text-xs font-medium text-gray-500">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(howItWorksData.steps.length).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Steps Grid - Responsive */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {howItWorksData.steps.map((step, index) => (
            <div key={index} className="relative">
              <div
                className={`absolute   top-20 -right-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] ${
                  index === howItWorksData.steps.length - 1 || index === 1
                    ? "hidden"
                    : "lg:block md:block hidden"
                } `}
              >
                <svg
                  width="197"
                  height="50"
                  viewBox="0 0 197 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M1.68945 41.3082C1.68945 41.3082 39.4442 1.50001 96.4983 1.50001C153.552 1.50001 191.307 41.3083 191.307 41.3083"
                      stroke="#387FD2"
                    />
                    <path
                      d="M190.25 29.1094L191.965 42.0908L180.586 43.9268"
                      stroke="#387FD2"
                    />
                  </g>
                </svg>
              </div>

              <div
                className={`absolute hidden    top-28 -right-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] ${
                  index === howItWorksData.steps.length - 1 ||
                  index === 0 ||
                  index === 2
                    ? "hidden"
                    : "lg:block"
                }`}
              >
                <svg
                  width="197"
                  height="50"
                  viewBox="0 0 197 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M0.986325 8.69175C0.986325 8.69175 38.7411 48.5 95.7952 48.5C152.849 48.5 190.604 8.69174 190.604 8.69174"
                      stroke="#387FD2"
                    />
                    <path
                      d="M189.547 20.8906L191.262 7.90915L179.883 6.07318"
                      stroke="#387FD2"
                    />
                  </g>
                </svg>
              </div>
              <WorkStepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
