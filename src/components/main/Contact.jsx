import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../ui/button'
const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col   lg:flex-row items-center lg:items-baseline justify-center bg-secondary'>
      <section
        data-aos="fade-right"
        data-aos-delay="700"
        className='flex-1 flex-col pl-4 lg:pl-25 mb-4 pt-20 text-[29px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px] transition-all duration-500 ease-in-out'>

        <h1 className='font-poppins-Bold  text-light '>
          Got a project in
        </h1>
        <h1 className='font-poppins-Bold  text-primary'>
          Mind?
        </h1>


        <img
          src='https://walaa2020.github.io/Portfolio-Website/Frame3.png' alt='person'
          className='h-40 sm:h-60 w-55 sm:w-75 mt-7 sm:mt-3'
        />
      </section>
      <section
        data-aos="fade-left"
        data-aos-delay="700"
        className=' flex-1 flex-col relative pr-0  xl:pr-30 pl-8 xl:pl-0'
      >
        <img
          src='https://walaa2020.github.io/Portfolio-Website/keyboard.png' alt='keyBoard'
          className='hidden sm:block pl-12 pb-20'
        />
        <div className='w-full pr-2 lg:pr-16 flex flex-col gap-4 '>
          <div className='flex flex-col sm:flex-row items-center justify-start gap-2 w-full'>
            <div><label htmlFor="Name" className="block text-sm/6 font-poppins-Bold text-light pb-2">
              Your name
            </label>
              <Input placeholder=" Name" className="" />
            </div>
            <div> <label htmlFor="Email" className="block text-sm/6 font-poppins-Bold text-light pb-2">
              Your email
            </label>
              <Input placeholder="Email" className="border-primary" /></div>
          </div>
          <div className='w-full  '>
            <label htmlFor="Message" className="block text-sm/6 font-poppins-Bold text-light pb-2">
              Your Message
            </label>
            <Textarea id="message" placeholder="Message " />
          </div>

        </div>
        <div className='flex justify-center lg:justify-start pt-5 '>
          <Button className="text-light  [text-shadow:0px_4px_4px_#00000080] font-poppins-Bold">Send Message  <img src="https://walaa2020.github.io/Portfolio-Website/send.svg" alt="send" /></Button>

        </div>

        <img
          src='https://walaa2020.github.io/Portfolio-Website/mail.png' alt='mail'
          className=' absolute right-20 hidden sm:block'
        />
      </section>
    </div>
  )
}

export default Contact