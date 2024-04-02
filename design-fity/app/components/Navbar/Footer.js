import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-gray-600 p-7 text-white'>
        <div></div>
        <div className='flex md:flex-row gap-5 flex-col justify-between'>
            <div>
                Design Fity
                <div className='flex items-center gap-2 text-white'>
                    <FaInstagram/>
                    <FaSquareTwitter/>
                    <FaFacebookSquare/>
                    <FaYoutube/>
                    <FaLinkedin/>
                </div>
            </div>
            <div>
              <h2>Get in Touch</h2>
            </div>
            <div>
              <h2 className='font-bold'>Our Newsletter</h2>
              <p>Subscribe to our newsletter to get our news delivered to you.</p>
              <div className='border-white border-2 flex rounded'>
                <input type='email' className='p-1 w-full text-black outline-none' placeholder='Email Address'/>
                <div className='bg-[#2dabb1] p-1'>Join</div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer