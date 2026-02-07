import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from '@/components/ui/button';

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='min-h-screen bg-[url("/ProjectsPage.png")] bg-cover bg-center flex flex-col items-center lg:items-start justify-center gap-8 px-4 sm:px-6 md:px-12 lg:px-24'>

      <div className='flex flex-row gap-2 pt-20' data-aos="fade-down">
        <h1 className='font-poppins-Bold text-3xl sm:-5xl text-light'>My Recent</h1>
        <h1 className='font-poppins-Bold  text-3xl sm:text-5xl text-primary'>Works</h1>
      </div>

      <div className='flex flex-wrap justify-center lg:justify-start gap-3' data-aos="fade-up">
        <Button className="text-light px-6 py-2 drop-shadow-lg font-poppins-Bold">All</Button>
        <Button className="text-light px-6 py-2 drop-shadow-lg font-poppins-Bold bg-dark">UI</Button>
        <Button className="text-light px-6 py-2 drop-shadow-lg font-poppins-Bold bg-dark">UX</Button>
        <Button className="text-light px-6 py-2 drop-shadow-lg font-poppins-Bold bg-dark">Web Design</Button>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>
        <div className="backdrop-blur-xs bg-[#393E4680] h-44 w-64 sm:h-48 sm:w-64 flex items-center justify-center rounded-md" data-aos="fade-up" data-aos-delay="100">
          <img src="https://walaa2020.github.io/Portfolio-Website/design.jpg" alt="design" className="h-28 w-40 object-contain" />
        </div>

        <div className="backdrop-blur-xs bg-[#393E4680] h-44 w-64 sm:h-48 sm:w-64 flex items-center justify-center rounded-md" data-aos="fade-up" data-aos-delay="200">
          <img src="https://walaa2020.github.io/Portfolio-Website/uiux.png" alt='uiux' className="h-28 w-60 object-contain" />
        </div>

        <div className="backdrop-blur-xs bg-[#393E4680] h-44 w-64 sm:h-48 sm:w-64 flex items-center justify-center rounded-md" data-aos="fade-up" data-aos-delay="300">
          <img src="https://walaa2020.github.io/Portfolio-Website/mobile.png" alt='mobile' className="h-28 w-60 object-contain" />
        </div>
      </div>
    </div>
  )
}

export default Works;
