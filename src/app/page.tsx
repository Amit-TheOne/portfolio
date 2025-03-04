import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { About } from "@/sections/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}
