import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Certificate from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Skills />

      <Timeline />

      <Certificate/>

      <Contact />

      <Footer />
    </main>
  );
}