import { Hero } from "@/sections/Hero";
import { Navbar } from "@/sections/Navbar";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { About } from "@/sections/About";
import { Blogs } from "@/sections/Blogs";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
