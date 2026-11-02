import { AboutUs } from "@/components/ui/landing/about-us";
import Blog from "@/components/ui/landing/Blog";
import ExperticeService from "@/components/ui/landing/ExperticeService";
import Faq from "@/components/ui/landing/faq";
import { Hero } from "@/components/ui/landing/hero";
import { HowItWorks } from "@/components/ui/landing/HowItWorks";
import OurPortfolioProjects from "@/components/ui/landing/OurPortfolioProjects";
import { OurValue } from "@/components/ui/landing/OurValue";
import { ServicesMarquee } from "@/components/ui/landing/services-marquee";
import ServicesOffer from "@/components/ui/landing/ServicesOffer";
import ScrollReveal from "@/components/ui/landing/ScrollReveal";
import Testimonials from "@/components/ui/landing/Testimonials";
import WhyChooseUs from "@/components/ui/landing/WhyChooseUs";
import WorkProcess from "@/components/ui/landing/WorkProcess";
import Team from "@/components/ui/service/Team";
import Contect from "@/components/ui/landing/Contect";
import { HomePagefaqData } from "@/data/homePageFAQdata";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesMarquee />
      </ScrollReveal>
      <ScrollReveal>
        <AboutUs />
      </ScrollReveal>
      <ScrollReveal>
        <OurValue />
      </ScrollReveal>
      <ScrollReveal>
        <ServicesOffer />
      </ScrollReveal>
      <ScrollReveal>
        <ExperticeService />
      </ScrollReveal>
      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal>
        <OurPortfolioProjects />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal>
        <WorkProcess />
      </ScrollReveal>
      <ScrollReveal>
        <Team />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <Blog />
      </ScrollReveal>
      <ScrollReveal>
        <Faq HomePagefaqData={HomePagefaqData} />
      </ScrollReveal>
      <ScrollReveal>
        <Contect />
      </ScrollReveal>
    </main>
  );
}
