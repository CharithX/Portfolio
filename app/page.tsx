import About from "@/components/About";
import Experince from "@/components/Experince";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-[#1A1A1A] flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Experince />
        <Footer />
      </div>
    </main>
  );
}
