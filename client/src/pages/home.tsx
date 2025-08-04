import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Faculty from "@/components/sections/faculty";
import Students from "@/components/sections/students";
import Events from "@/components/sections/events";
import Gallery from "@/components/sections/gallery";
import Infrastructure from "@/components/sections/infrastructure";
import Curriculum from "@/components/sections/curriculum";
import Contact from "@/components/sections/contact";
import MatrixBackground from "@/components/ui/matrix-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden relative">
      <MatrixBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Faculty />
        <Students />
        <Events />
        <Gallery />
        <Infrastructure />
        <Curriculum />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
