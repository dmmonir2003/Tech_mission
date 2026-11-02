import { BookOpenCheck, Leaf, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

const values = [
  {
    icon: <BookOpenCheck className="w-8 h-8 text-brand-primary" />,
    title: "Islamic Ethics",
    description:
      "We adhere to Islamic principles in all our operations, ensuring fairness, transparency, and social responsibility.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: "Sustainability",
    description:
      "We are committed to developing sustainable solutions that minimize environmental impact and promote long-term well-being.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Innovation",
    description:
      "We constantly seek new and improved ways to serve our clients and contribute to technological advancement.",
  },
];

export function OurValue() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-brand-background">
      <div className="container mx-auto px-4 text-center">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-secondary text-[#072D5B] font-raleway">
            Our Values
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Core Beliefs and Guiding Principles
          </p>
        </div>

        <div className="mt-6 text-left sm:hidden">
          <p className="mb-3 flex items-center justify-between px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            <span>Our principles</span>
            <span className="text-blue-600">Swipe to explore&nbsp; →</span>
          </p>
          <div
            aria-label="Our values. Swipe horizontally to explore each principle."
            className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            tabIndex={0}
          >
            {values.map((value, index) => (
              <article
                key={value.title}
                className="relative flex min-h-[225px] w-[min(82vw,320px)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/80 p-5 shadow-[0_12px_30px_rgba(7,45,91,0.09)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute -right-7 -top-8 h-28 w-28 rounded-full bg-blue-100/60"
                />
                <div className="relative flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#072D5B] to-[#2488C1] shadow-lg shadow-blue-900/20 [&_svg]:h-7 [&_svg]:w-7 [&_svg]:text-white">
                    {value.icon}
                  </div>
                  <span className="text-4xl font-bold tracking-tight text-blue-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="relative mt-5 text-xl font-bold leading-tight text-[#072D5B]">
                  {value.title}
                </h3>
                <div className="my-3 h-1 w-12 rounded-full bg-gradient-to-r from-[#072D5B] to-[#2488C1]" />
                <p className="relative text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 hidden grid-cols-1 gap-4 sm:mt-12 sm:grid sm:grid-cols-1 sm:gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-left p-4 sm:p-4 bg-[#FBFBFB] border border-[#CFE8DE]"
            >
              <CardHeader className="flex flex-row items-center gap-3 sm:gap-4 space-y-0 px-2 sm:px-6">
                {value.icon}
                <CardTitle className="text-xl sm:text-2xl font-bold text-[#072D5B]">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 sm:px-6">
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
