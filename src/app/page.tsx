import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { Projects } from "@/sections/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
