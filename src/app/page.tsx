import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { fetchAllRepos } from "@/lib/github";

export default async function Home() {
  const { repos, error } = await fetchAllRepos();

  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects repos={repos} error={error} />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
