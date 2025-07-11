import About from "./components/About"
import Certificates from "./components/Certificates"
import ContactForm from "./components/ContactForm"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Technologies from "./components/Technologies"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selecion:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Certificates/>
        <Project/>
        <Education/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
