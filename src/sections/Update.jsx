import React from 'react'

const Update = () => {
  return (
    <section className='sm:py-24 py-12 flex flex-col gap-2 lg:flex-row items-center justify-between'>
        <h1 className='text-4xl font-bold flex-1' >
        Sign Up for <span className='text-primary  inline-block mb-2'>Updates</span><br/> & Newsletter
        </h1>
        <div className='py-3 flex-1 justify-between flex px-3 border-4 rounded-full'>
            <input type="text" placeholder='subscribe@nike.com' className='input outline-none p-4 bg-litil_orange' />
            <a href="#products" className="px-7 font-bold py-4 inline-block bg-primary  rounded-full"
         >sign now</a>
          
        </div>
    </section>
  )
}

export default Update
