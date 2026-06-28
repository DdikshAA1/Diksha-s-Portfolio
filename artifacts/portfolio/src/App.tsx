import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground font-sans relative selection:bg-primary/30 selection:text-white">
        {isLoading && <LoadingScreen />}
        
        <CursorGlow />
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Projects />
          <Timeline />
          <Education />
          <Certifications />
          <GitHub />
          <Contact />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
