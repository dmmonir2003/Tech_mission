// import React from "react";

// function WhyChooseUs() {
//   return (
// <div
//   style={{
//     backgroundImage: "url('/whychoose.png')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     padding: "40px",
//   }}
// >
//       <div className="max-w-xl mx-auto px-4 text-center">
//         <h2 className="text-3xl lg:text-4xl font-semibold text-brand-secondary font-raleway text-[#072D5B]">
//           Why Choose Tech Mission?
//         </h2>
//         <p className="mt-4 text-lg text-gray-600">
//           Experience excellence in digital craftsmanship with our team of
//           skilled professionals dedicated to delivering exceptional results.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-[1200px] ">
//       <div className="bg-white p-4 translate-x-25 -translate-y-20 rounded-full shadow-lg w-[200px] h-[200px]  flex flex-col justify-center items-center">
//         <h3 className="text-[28px] font-semibold text-[#333333] text-center">Completed Projects </h3>
//         <p className="text-[28px] font-semibold text-[#3624DB] text-center">15+</p>
//       </div>

//       <div className="bg-white p-4 -translate-x-25 translate-y-2  rounded-full shadow-lg w-[200px] h-[200px]  flex flex-col justify-center items-center">
//         <h3 className="text-[28px] font-semibold text-[#333333] text-center">Completed Projects </h3>
//         <p className="text-[28px] font-semibold text-[#3624DB] text-center">15+</p>
//       </div>

//       <div className="bg-white p-4 translate-x-50 -translate-y-15 rounded-full shadow-lg w-[200px] h-[200px]  flex flex-col justify-center items-center">
//         <h3 className="text-[28px] font-semibold text-[#333333] text-center">Completed Projects </h3>
//         <p className="text-[28px] font-semibold text-[#3624DB] text-center">15+</p>
//       </div>

//       <div className="bg-white p-4  translate-y-5 translate-x-25 rounded-full shadow-lg w-[200px] h-[200px]  flex flex-col justify-center items-center">
//         <h3 className="text-[28px] font-semibold text-[#333333] text-center">Completed Projects </h3>
//         <p className="text-[28px] font-semibold text-[#3624DB] text-center">15+</p>
//       </div>

//       </div>
//     </div>
//   );
// }

// export default WhyChooseUs;

import React from "react";

// Data for the cards. You can easily add, remove, or change items here.
const statsData = [
  {
    title: "Completed Projects",
    value: "50+",
    color: "text-indigo-600",
  },
  {
    title: "Happy Clients",
    value: "98%",
    color: "text-teal-600",
  },
  {
    title: "Years of Experience",
    value: "10+",
    color: "text-amber-600",
  },
  {
    title: "Expert Team Members",
    value: "25+",
    color: "text-rose-600",
  },
];

// The individual stat card component has been removed to allow for custom positioning for each card.

function WhyChooseUs() {
  return (
    // Section container with a subtle background and responsive padding
    <div
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6"
      style={{
        backgroundImage: "url('/whychoose.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header section */}
      <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway">
          Why Choose Tech Mission?
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Experience excellence in digital craftsmanship with our team of
          skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>

      {/* Container for the staggered cards, mimicking the requested layout */}
      <div className="flex justify-center items-center mt-6 sm:mt-12 p-0 sm:p-8 lg:p-16">
        <div className="grid w-full grid-cols-2 gap-3 sm:hidden">
          {statsData.map((stat, index) => (
            <article
              key={stat.title}
              className="relative flex min-h-32 flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/95 p-3.5 text-left shadow-[0_10px_25px_rgba(7,45,91,0.10)]"
            >
              <span className="absolute -right-4 -top-5 h-16 w-16 rounded-full bg-blue-50" />
              <span className="relative text-[11px] font-semibold leading-snug text-slate-600">
                {stat.title}
              </span>
              <div className="relative mt-3 flex items-end justify-between">
                <span className={`text-3xl font-bold leading-none ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-300">
                  0{index + 1}
                </span>
              </div>
              <div
                aria-hidden="true"
                className={`mt-3 h-1 w-10 rounded-full ${
                    index === 0
                      ? "bg-indigo-500"
                      : index === 1
                        ? "bg-teal-500"
                        : index === 2
                          ? "bg-amber-500"
                          : "bg-rose-500"
                  }`}
              />
            </article>
          ))}
        </div>

        <div className="hidden w-full max-w-4xl grid-cols-2 gap-x-8 gap-y-4 translate-x-0 mx-auto sm:grid lg:-translate-x-20 md:-translate-x-10">
          {/* Card 1 */}
          <div className="bg-white rounded-full shadow-2xl w-full max-w-[164px] aspect-square sm:w-52 sm:h-52 sm:max-w-none flex flex-col justify-center items-center text-center p-3 sm:p-4 mx-auto md:mx-0 transform md:-translate-x-10 md:-translate-y-10 hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-[13px] leading-tight sm:text-lg md:text-xl font-semibold text-gray-700">
              {statsData[0].title}
            </h3>
            <p
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 ${statsData[0].color}`}
            >
              {statsData[0].value}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-full shadow-2xl w-full max-w-[164px] aspect-square sm:w-52 sm:h-52 sm:max-w-none flex flex-col justify-center items-center text-center p-3 sm:p-4 mx-auto md:mx-0 transform md:-translate-x-12 md:translate-y-2 hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-[13px] leading-tight sm:text-lg md:text-xl font-semibold text-gray-700">
              {statsData[1].title}
            </h3>
            <p
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 ${statsData[1].color}`}
            >
              {statsData[1].value}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-full shadow-2xl w-full max-w-[164px] aspect-square sm:w-52 sm:h-52 sm:max-w-none flex flex-col justify-center items-center text-center p-3 sm:p-4 mx-auto md:mx-0 transform md:translate-x-24 md:-translate-y-8 hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-[13px] leading-tight sm:text-lg md:text-xl font-semibold text-gray-700">
              {statsData[2].title}
            </h3>
            <p
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 ${statsData[2].color}`}
            >
              {statsData[2].value}
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-full shadow-2xl w-full max-w-[164px] aspect-square sm:w-52 sm:h-52 sm:max-w-none flex flex-col justify-center items-center text-center p-3 sm:p-4 mx-auto md:mx-0 transform md:translate-x-24 md:translate-y-5 hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-[13px] leading-tight sm:text-lg md:text-xl font-semibold text-gray-700">
              {statsData[3].title}
            </h3>
            <p
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2 ${statsData[3].color}`}
            >
              {statsData[3].value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
