import Main from "../components/Main.tsx";
import About from "../components/About.tsx";
import Skills from "../components/Skills";
import Projects from "../components/Projects.tsx";
import Contact from "../components/Contact.tsx";

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
