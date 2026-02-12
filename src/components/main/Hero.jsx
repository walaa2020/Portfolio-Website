import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';
const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className=" flex flex-col  lg:flex-row items-center justify-center w-full px-4 lg:pl-18 xl:pl-18  min-h-screen bg-secondary relative overflow-hidden  "
    >


      <div
        className="flex-1 items-center lg:mr-3 xl:mr-28 mt-20 lg:mt-10 lg:mb-20 relative z-10"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className=' flex mt-20 '>
          <img src="https://walaa2020.github.io/Portfolio-Website/Vector.png" alt='vector' className='hidden [@media(min-width:730px)]:block w-[89.96px]   sm:h-[300.11px]   sm:pt-9  px-3 ' />
          <header>
            <h1 className="font-poppins-Bold text-[clamp(1.875rem,8vw,3.75rem)] text-light mb-4 [text-shadow:0px_4px_4px_#00000080] ">
              CREATIVE UI
            </h1>
            <h1 className="font-poppins-Bold  text-[clamp(1.875rem,8vw,3.75rem)] text-primary mb-4 [text-shadow:0px_4px_4px_#00000080]">
              DESIGNER
            </h1>
            <div className="pt-7 flex gap-3 sm:gap-5 ">
              <Button className="text-light px-6 sm:px-8 py-2.5  [text-shadow:0px_4px_4px_#00000080]  font-poppins-Bold">Hire me</Button>
              <Button className="text-light bg-dark px-6 sm:px-8 py-2.5 font-poppins-Bold  [text-shadow:0px_4px_4px_#00000080]">Download CV


               <img src="https://walaa2020.github.io/Portfolio-Website/download.svg" alt="download" className='w-5 h-6'/>


              </Button>
            </div>

          </header>

        </div>
      </div>

      <figure
        className="flex-1 mt-10 lg:mt-0"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <img src="https://walaa2020.github.io/Portfolio-Website/Frame.png" alt="hero" className="w-70 sm:w-full max-w-sm mx-auto lg:mx-0  mt-0 lg:mt-40" />
      </figure>
    </section>
  );
};

export default Hero;
