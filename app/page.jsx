import Main from "./components/Home/Main";
import About from "./components/Home/About";
import Skills from "./components/Home/Skills";
import Projects from "./components/Home/Projects";
import Contact from "./components/Home/Contact";

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
