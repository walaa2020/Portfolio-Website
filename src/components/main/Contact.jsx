import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from '../ui/button'
const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col   lg:flex-row items-center lg:items-baseline 
 justify-center bg-secondary'>
      <section
        data-aos="fade-right"
        data-aos-delay="700"
        className='flex-1 flex-col pl-4 lg:pl-25 mb-4 pt-20'>

        <h1 className='font-poppins-Bold text-5xl text-light '>
          Got a project in
        </h1>
        <h1 className='font-poppins-Bold text-5xl text-primary'>
          Mind?
        </h1>


        <img
          src='/Frame3.png' alt='person'
          className='h-60 w-75'
        />



      </section>
      <section
        data-aos="fade-left"
        data-aos-delay="700"
        className=' flex-1 flex-col relative pr-0  xl:pr-30 pl-8 xl:pl-0'

      >
        <img
          src='/keyboard.png' alt='keyBoard'
          className='pl-12 pb-20'
        />
        <div className='w-full pr-16 flex flex-col gap-4 '>
          <div className='flex flex-row items-center justify-start gap-2 w-full'>

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
          <div className='pr-4'>
            <label htmlFor="Message" className="block text-sm/6 font-poppins-Bold text-light pb-2">
              Your Message
            </label>
            <Textarea id="message" placeholder="Message " />
          </div>

        </div>
        <div className=' pt-5'>
          <Button className="text-light  [text-shadow:0px_4px_4px_#00000080] font-poppins-Bold">Send Message  <img src="/send.svg" alt="send" /></Button>

        </div>

        <img
          src='/mail.png' alt='mail'
          className=' absolute right-20 '
        />
      </section>
    </div>
  )
}

export default Contact