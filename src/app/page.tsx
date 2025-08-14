import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Services } from "./components/Services";
import { FAQ } from "./components/FAQ";
import { Project } from "./components/Project";
import Contactme from "./components/Contactme";
import Script from "next/script";

export default function HomePage() {
  return (
    <div className="text-white w-full overflow-x-hidden">
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <FAQ />
      <Project />
      <Contactme />

      <Script
        id="ld-json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Elanchezhian M",
            jobTitle: "Full Stack Developer",
            url: "https://elan-dev.vercel.app/",
            image: "https://elan-dev.vercel.app/og-image.jpg",
            sameAs: [
              "https://github.com/Elanchezhian2712",
              "https://www.linkedin.com/in/elanchezhian-dev/"
            ],
            email: "mailto:elanchezhian2712.m@gmail.com",
            description:
              "Full Stack Developer & Software Engineer specializing in modern web applications, AI integrations, and scalable solutions.",
            knowsAbout: [
              "JavaScript",
              "TypeScript",
              "Python",
              "React",
              "Next.js",
              "Django",
              "FastAPI",
              "Full Stack Development"
            ]
          }),
        }}
      />
    </div>
  );
}
