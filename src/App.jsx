import Navbar from "./components/layout/Navbar.jsx"
import Footer from "./components/layout/Footer.jsx"
import Hero from "./components/sections/Hero.jsx"
import About from "./components/sections/About.jsx"
import Skills from "./components/sections/Skills.jsx"
import Projects from "./components/sections/Projects.jsx"
import Experience from "./components/sections/Experience.jsx"
import Contact from "./components/sections/Contact.jsx"

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
