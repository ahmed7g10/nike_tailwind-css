import React from 'react'
import logo from '../assets/images/footer-logo.svg';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
   <>
    <section className='sm:pt-24 mb-8 pt-12 items-start gap-20 grid place-items-center lg:flex justify-between'>
      <div className='flex-1'>
        <img src={logo} alt="" />
        <p className='mt-3 mb-6'>Get shoes ready for the new term at your nearest Nike 
            . Find Your perfect Size In Store. Get Rewards
        </p>
        <ul className='flex gap-6 mt-4'>
            <li className='py-3 px-3 bg-white text-black rounded-full'><a href="#"><FaTwitter/></a></li>
            <li className='py-3 px-3 bg-white text-black rounded-full'><a href="#"><FaFacebookF/></a></li>
            <li className='py-3 px-3 bg-white text-black rounded-full'><a href="#"><FaInstagram/></a></li>
        </ul>
      </div>

      <div className='flex-1'>
        <h3 className='text-2xl font-bold mb-6'>Products</h3>
        <ul className='flex flex-col gap-3'>
            <li  className='hover:text-mygray'><a href="#">Aire Force 1</a></li>
            <li className='hover:text-mygray'><a href="#">Aire Max</a></li>
            <li className='hover:text-mygray'><a href="#">Air Max 90</a></li>
            <li className='hover:text-mygray'><a href="#">Air Max 97</a></li>
            <li className='hover:text-mygray'><a href="#">Nike</a></li>
            <li className='hover:text-mygray'><a href="#">Nike Air</a></li>
        </ul>
      </div>

      <div className='flex-1'>
        <h3 className='text-2xl font-bold mb-6'>Help</h3>
        <ul className='flex flex-col gap-3'>
            <li  className='hover:text-mygray'><a href="#">About Us</a></li>
            <li className='hover:text-mygray'><a href="#">FAQ,S</a></li>
            <li className='hover:text-mygray'><a href="#">How it works</a></li>
            <li className='hover:text-mygray'><a href="#">Privacy Policy</a></li>
            <li className='hover:text-mygray'><a href="#">Payment Policy</a></li>
        </ul>
      </div>

      <div className='flex-1'>
        <h3 className='text-2xl font-bold mb-6'>Get in touch</h3>
        <ul className='flex flex-col gap-3'>
            <li  className='hover:text-mygray'><a href="#">Customer@nike.com</a></li>
            <li className='hover:text-mygray'><a href="#">+1234567890</a></li>
           
        </ul>
      </div>

    </section>
    <div className='flex justify-between pb-12 sm:pb-24'>
        <p>copyright sign
        Copyright. All rights reserved.</p>
        <p>
            Terms & Conditions
        </p>
    </div>
    </>
  )
}

export default Footer
