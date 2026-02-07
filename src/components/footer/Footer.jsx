
const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300 pt-30 ">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-center gap-10 mb-8">
          <a href="#" className="flex items-center gap-2 text-light hover:text-white transition font-poppins-Regular">
            <img src="/home.svg" alt="home" />
            Home
          </a>
          <a href="#about" className="flex items-center gap-2 text-light hover:text-white transition font-poppins-Regular">
            <img src="/user.svg" alt="user" />
            About me
          </a>
          <a href="#contact" className="flex items-center gap-2 text-light hover:text-white transition font-poppins-Regular">
            <img src="/phone.svg" alt="phone" />
            Contact
          </a>
        </div>


        <div className="flex justify-center gap-4 mb-10  ">
          {["facebook", "instagram", "twitter", "youtube"].map((icon) => (
            <div
              key={icon}
              className="rounded-full bg-dark p-3"
            >
              <img src={`/${icon}.svg`} alt={icon} className="w-4 h-4 " />
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
