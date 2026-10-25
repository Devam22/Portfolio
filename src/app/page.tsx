import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getDisplayProjects } from "@/lib/projects";

export default async function Home() {
  const { projects, error } = await getDisplayProjects();

  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects projects={projects} error={error} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
