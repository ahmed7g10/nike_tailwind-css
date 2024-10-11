import React from 'react'

const Custumer = ({img,p,h3,r}) => {
  return (
    <div className='w-[40%] flex items-center flex-col'>
      <img className='w-[120px] h-[120px] rounded-full object-cover' src={img} alt="" />
      <p className='text-center text-mygray mt-2'>{p}</p>
     
      <small className="flex items-center text-lg text-mygray mt-0"><span className="inline-block 
      font-bold text-primary text-4xl">*</span>{r}</small>
       <h3 className='text-xl font-bold mt-2'>{h3}</h3>
    </div>
  )
}

export default Custumer
