import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-gray-600 p-7'>
        <div></div>
        <div>
            <div>
                Design Fity
                <div className='flex items-center gap-2'>
                    <FaInstagram/>
                    <FaSquareTwitter/>
                    <FaFacebookSquare/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer