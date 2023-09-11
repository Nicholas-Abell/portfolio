import Main from "../components/home/Main";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";

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
