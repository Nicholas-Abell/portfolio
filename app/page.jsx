import Main from "../components/sections/hero/Main";
import About from "../components/sections/about/About";
import Skills from "../components/sections/skills/Skills";
import Projects from "../components/sections/projects/Projects";
import Contact from "../components/sections/contact/Contact";

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
