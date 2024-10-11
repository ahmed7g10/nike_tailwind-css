import React from 'react'
import offer from '../assets/images/offer.svg';
const Offer = () => {
  return (
    <section className='sm:py-24 py-12 gap-6 flex-col lg:flex-row flex items-center'>
      <div className='flex-1'><img src={offer} alt="" /></div>
      <aside className='flex-1 flex flex-col'>
        <h2 className="text-4xl font-bold">
         <span className="text-primary inline-block pr-2">Special </span>Offer
        </h2>
        <p className="text-mygray mt-2">
        Embark on a shopping journey that redefines your experience with unbeatable 
        deals. From premier selections to incredible savings
        , we offer unparalleled value that sets us apart.
        </p>
        <p className='text-mygray mt-4 mb-11'>
        Navigate a realm of possibilities designed to fulfill your unique desires,
         surpassing the loftiest expectations. 
        Your journey with us is nothing short of exceptional.
        </p>
        <div>
        <a href="#products" className="px-7 font-bold py-4 inline-block bg-primary  rounded-full"
         >shop now</a>
          <a href="#products" className="ml-8 px-7 font-bold py-4 inline-block bg-none border-4  rounded-full"
         >learn more</a>
        </div>
      </aside>
    </section>
  )
}

export default Offer
