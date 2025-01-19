import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillSkype } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='relative bottom-96'>
      <div className='relative bottom-96'>
        <div className="bg-blue-950  text-white w-[1104px] h-[380px] relative bottom-96">
          <div className='flex flex-col py-16'>

            <a href="#" className='hover:text-blue-300  text-lg font-bold'>  Menu</a>
            <a href="#" className='hover:text-blue-300  font-bold  text-lg'>New arrivals</a>
            <a href="#" className='hover:text-blue-300  font-bold  text-lg'>Best sellers</a>
            <a href="#" className='hover:text-blue-300  font-bold text-lg'>Recently view</a>
            <a href="#" className='hover:text-blue-300  font-bold text-lg'>Popular this week</a>
            <a href="#" className='hover:text-blue-300  font-bold text-lg'>All products</a>
            <a href="#" className='hover:text-blue-300 relative bottom-44 ml-52  font-bold text-lg'>Categories</a>
            <a href="#" className='hover:text-blue-300 relative bottom-44 ml-52 font- text-lg'>Crockery</a>
            <a href="#" className='hover:text-blue-300 relative bottom-44 ml-52 font-bold text-lg'>Furniture</a>
            <a href="#" className='hover:text-blue-300 relative bottom-44 ml-52 font-bold text-lg'>Homeware</a>
            <a href="#" className='hover:text-blue-300 relative bottom-44 ml-52 font-bold text-lg'>Plant pots</a>
            <a href="#" className='hover:text-blue-300 relative bottom-44 ml-52 font-bold text-lg'>Chairs</a>
            <a href="#" className='hover:text-blue-300 relative bottom-44 ml-52 font-bold text-lg'>Crockery</a>
            <a href="#" className='hover:text-blue-300 relative bottom-96 py-4 ml-96  font-bold text-lg'>Our company</a>
            <a href="#" className='hover:text-blue-300 relative bottom-96 ml-96 font-bold text-lg'>About us</a>
            <a href="#" className='hover:text-blue-300 relative bottom-96 ml-96 font-bold text-lg'>Vacancies</a>
            <a href="#" className='hover:text-blue-300 relative bottom-96 ml-96 font-bold text-lg'>Contact us</a>
            <a href="#" className='hover:text-blue-300 relative bottom-96 ml-96 font-bold text-lg'>Privacy</a>
            <a href="#" className='hover:text-blue-300 relative bottom-96 ml-96 font-bold text-lg'>Returns policy</a>
            <div className='flex justify-between ml-96 relative font-bold text-lg bottom-96 text-white'>
              <p className='relative bottom-52 left-72'>Join our mailing list</p>
              <input
                type="text"
                placeholder='your@email.com'
                className='relative bottom-36 right-36 w-[290px] h-[49px] ml-36 ' />
            </div>
          </div>
          <div className='relative bottom-64 ml-96 '>
            <Button className='relative bottom-96 left-96 ml-48 h-[49px]'>SingUp</Button>
          </div>
          <div className='relative bottom-32'>
            <Image
              src="/line.jpg"
              alt=''
              width={1277}
              height={317}
              className='bottom-96 relative' />
            <div className='text-2xl text-white relative bottom-96 font-medium'>
              Copyright 2022 Avion LTD
              <div className='ml-96'>
                <div className='ml-96'>
                  <FaLinkedin />
                </div>
                <div className='ml-96 '>
                  <div className='ml-16 bottom-6 relative'>
                    <FaFacebookSquare />
                    <FaInstagram  className="ml-14 relative bottom-6"/> 
                    <AiFillSkype className="ml-28 relative bottom-12" />
                    <FaTwitter className="ml-40  relative bottom-16 " />
                    <FaPinterest  className="ml-52 relative bottom-20"/>

                    


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
