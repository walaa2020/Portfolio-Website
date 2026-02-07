import React, { useEffect, useState } from "react";
import { FiMenu ,FiX } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const NavbarLinks = [
    { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About Me", link: "about" },
    { id: 3, name: "Contact", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 bg-secondary text-light"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        <p className="font-bold text-lg">SaulDesign</p>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-8 h-8" />
        </button>

        <nav className="hidden md:flex items-center space-x-7">
          {NavbarLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.link}`}
              className={`text-lg transition-colors duration-300
                ${activeSection === item.link
                  ? "text-primary font-semibold"
                  : "text-light"
                }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
   <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-secondary h-screen 
absolute top-0 left-0 w-full space-y-8 pt-16
flex flex-col items-center justify-center`}>

  <button onClick={() => setIsOpen(false)}>
    <FiX className="w-8 h-8 font-poppins-Bold absolute top-0 right-0  mt-5 mr-12"/>
  </button>

  {NavbarLinks.map((link) => (
    <a
      href={`#${link.link}`}
      key={link.id}
      onClick={() => setIsOpen(false)}
      className="text-xl text-light hover:text-primary transition font-poppins-Bold"
    >
      {link.name}
    </a>
  ))}
</div>

    </header>
  );
};

export default Header;
