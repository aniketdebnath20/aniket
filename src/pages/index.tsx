import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { RealWorldProject } from "@/components/realworldproject";
import { Skills } from "@/components/skill";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <RealWorldProject />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
