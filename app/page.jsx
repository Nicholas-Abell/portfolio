import Main from "../components/sections/Main";
import About from "../components/sections/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

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
