import React from 'react'
import shoe8 from '../assets/images/shoe8.svg';
import { FaHandsHelping } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { CiDeliveryTruck } from 'react-icons/ci';


const Provide = () => {
  return (
    <>
    <section id="products" className='sm:py-24 flex-col lg:flex-row  items-center gap-10 py-12 flex justify-between'>
     <div className=' lg:w-[40%] '>
     <h2 className='text-4xl font-bold'>
      <>We Provide You</> <span className='text-primary  '>Super </span> <br />
      <span className='text-primary inline-block pt-2 pr-2 '>Quality </span>
      Shoes
      </h2>
      <p className='text-mygray mt-2'>
      Ensuring premium comfort and style, our meticulously crafted footwear is
       designed to elevate your experience, 
      providing you with unmatched quality, innovation, and a touch of elegance.
      </p>
      <p className='text-mygray mt-4 mb-11'>
      Our dedication to detail and excellence ensures your satisfaction
      </p>
      <a className="text-lg hover:bg-slate-100 transition  hover:text-black 
      px-7 font-bold py-4 inline-block bg-primary  rounded-full"
       href="#home">View Details</a>
     </div>
     <div>
        <img className='w-full' src={shoe8}/>  
     </div>

    </section>
    <div className='sm:py-24 py-12 grid lg:grid-cols-3 gap-4   '>
        <article className='flex flex-col gap-6 shadow-sm shadow-black rounded-lg py-10 px-6 '>
            <span className='inline-block w-fit p-4 bg-primary rounded-full text-xl '>
                <FaTruck className='text-white  font-bold text-xl'/>
            </span>
            <h3 className='text-2xl font-bold'>
            Free shipping
            </h3>
            <p
            className='text-mygray'>Enjoy seamless shopping
             with our complimentary shipping service.</p>
        </article>
        <article className='flex flex-col gap-6 shadow-sm shadow-black rounded-lg py-10 px-6 '>
            <span className='inline-block w-fit p-4 bg-primary rounded-full text-xl '>
                <IoShieldCheckmarkSharp className='text-white  font-bold text-xl'/>
            </span>
            <h3 className='text-2xl font-bold'>
            Secure Payment

            </h3>
            <p
            className='text-mygray'>Experience worry-free 
            transactions with our secure payment options.</p>
        </article>
        <article className='flex flex-col gap-6 shadow-sm shadow-black rounded-lg py-10 px-6 '>
            <span className='inline-block w-fit p-4 bg-primary rounded-full text-xl '>
                <FaHandsHelping className='text-white  font-bold text-xl'/>
            </span>
            <h3 className='text-2xl font-bold'>
            Love to help you


            </h3>
            <p
            className='text-mygray'>Our dedicated team is 
            here to assist you every step of the way.</p>
        </article>

    </div>
    </>
  )
}

export default Provide
