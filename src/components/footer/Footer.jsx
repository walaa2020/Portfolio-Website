
const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 pt-30 ">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-center gap-5 sm:gap-10 mb-8">
          <a href="#" className="flex items-center gap-1 sm:gap-2 text-light hover:text-white transition font-poppins-Regular text-[clamp(0.6rem,8vw,1rem)]">
            <img src="https://walaa2020.github.io/Portfolio-Website/home.svg" alt="home" className="size-[clamp(0.6rem,8vw,1.3rem)]" />
            Home
          </a>
          <a href="#about" className="flex items-center gap-1 sm:gap-2 text-light hover:text-white transition font-poppins-Regular text-[clamp(0.6rem,8vw,1rem)] whitespace-nowrap ">
            <img src="https://walaa2020.github.io/Portfolio-Website/user.svg" alt="user" className="size-[clamp(0.6rem,8vw,1.3rem)]" />
            About me
          </a>
          <a href="#contact" className="flex items-center gap-1 sm:gap-2 text-light hover:text-white transition font-poppins-Regular text-[clamp(0.6rem,8vw,1rem)]">
            <img src="https://walaa2020.github.io/Portfolio-Website/phone.svg" alt="phone" className="size-[clamp(0.6rem,8vw,1.3rem)]"/>
            Contact
          </a>
        </div>


        <div className="flex justify-center gap-4 mb-10  ">
          {["facebook", "instagram", "twitter", "youtube"].map((icon) => (
            <div
              key={icon}
              className="rounded-full bg-dark p-3"
            >
              <img src={`https://walaa2020.github.io/Portfolio-Website/${icon}.svg`} alt={icon} className="w-4 h-4 " />
            </div>
          ))}
        </div>


        <div className="flex justify-end pb-6 text-xs font-poppins-Regular text-light opacity-75 ">
          <p>
            Terms of Service - Privacy Policy
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
