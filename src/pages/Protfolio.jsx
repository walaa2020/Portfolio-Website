import { React} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import Hero from "../components/main/Hero";
import About from "../components/main/About";
import Contact from "../components/main/Contact";
import Header from "../components/header/Header";
import Works from "../components/main/Works";
import Footer from "../components/footer/Footer";

function Protfolio() {
 
  return (
    <main className="bg-gray[750] min-h-[950]">
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <Works />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}

export default Protfolio

