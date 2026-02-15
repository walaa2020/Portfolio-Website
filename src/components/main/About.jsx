import React, { useState } from "react";
const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. 
Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. 
Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. 
Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. 

Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. 
Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. 
Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. 
Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas.`;

  const toggleReadMore = () => setIsExpanded(!isExpanded);
  return (
    <section
      id="about"
      className='h-auto bg-secondary px-4 xl:px-18 flex flex-col  lg:flex-row items-center lg:items-start justify-center w-full  '>
      <section
        data-aos="fade-right"
        data-aos-delay="700"
        className='flex-1 flex flex-col items-center lg:items-start  px-0 lg:px-7 '>
        <div className='h-10 w-16 pb-30'>
          <img src="https://walaa2020.github.io/Portfolio-Website/music.png" alt="music" className=" max-w-sm mx-auto  h-10 w-12 sm:w-auto sm:h-auto" />
        </div>
        <div className=' flex flex-row gap-2 items-center justify-center max-w-md text-[29px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px] transition-all duration-500 ease-in-out '>
          <h1 className='text-light font-poppins-Bold '>About</h1>
          <h1 className='text-primary font-poppins-Bold '>me</h1>
          <img src="https://walaa2020.github.io/Portfolio-Website/lightbulb.png" alt="lightbulb" className="pl-4 h-16 w-16 sm:w-auto sm:h-auto" />
        </div>
        <p
          className={`px-4 sm:px-5 md:px-7 lg:px-0 text-light font-poppins-Regular text-[14px] sm:text-[16px] lg:text-[18px] leading-none tracking-normal mt-4 overflow-hidden transition-all duration-300 ${!isExpanded ? "line-clamp-7" : ""
            }`}

        >
          {isExpanded ? text : `${text.slice(0, 1000)}... `}

        </p>
        <button
          onClick={toggleReadMore}
          className=" text-light flex font-poppins-Bold hover:underline text-[14px] sm:text-[16px] lg:text-[18px] transition-all duration-300 "
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
        <div className='w-full flex justify-end pt-20 pr-20'>
          <img src="https://walaa2020.github.io/Portfolio-Website/Vector 186.png" alt="Vector 186" className="max-w-sm h-16 w-16 sm:w-32  sm:h-32 " />
        </div>
      </section>
      <section className=' flex-2 bg-secondary '>
        <figure
          className="flex-1 "
          data-aos="fade-left"
          data-aos-delay="700"
        >
          <img src="https://walaa2020.github.io/Portfolio-Website/Frame2.png" alt="about" className="w-full max-w-lg mx-auto " />
        </figure>
      </section>

    </section>
  )
}

export default About