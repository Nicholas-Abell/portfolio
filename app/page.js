import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const metadata = {
  title: 'Nicholas Abell',
  description: 'Portfolio',
}

export default function Home() {
  return (
    <main>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
