import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
}
