import React from 'react'
import Custumer from '../components/Custumer'
import customer1 from '../assets/images/customer1.jpeg';
const Opnion = () => {
  return (
    <section className='sm:py-24 py-12 w-full bg-orange-950 '>
       <div className='w-[80%] mx-auto'>
       <h2 className='text-4xl text-center font-bold pb-2' >What Our <span className='text-primary'>Customers</span> Say?</h2>
      <p className='text-mygray text-center'>Hear genuine stories from our satisfied 
        customers about their exceptional experiences with us.</p>
       </div>
       <main className='flex flex-col gap-4 lg:flex-row items-center justify-around pt-16'>
          <Custumer img={customer1} p="The attention to detail and the quality 
          of the product exceeded my expectations. Highly recommended!"
          h3="Morich Brown" r={"(4.5)"}/>
           <Custumer img={customer1} p="The attention to detail and the quality 
          of the product exceeded my expectations. Highly recommended!"
          h3="Morich Brown" r={"(4.5)"}/>
       </main>
    </section>
  )
}

export default Opnion
