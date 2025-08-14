
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Services } from "./components/Services";
import { FAQ } from "./components/FAQ";
import { Project } from "./components/Project";
import Contactme from "./components/Contactme";



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

    </div>
  );
}
