import bac from "../assets/images/collection-background.svg";
import sh1 from "../assets/images/big-shoe1.png";
import sh2 from "../assets/images/big-shoe2.png";
import sh3 from "../assets/images/big-shoe3.png";
import { useState } from "react";
const hero = () => {
  const [im,setim]=useState(sh1);
  const fun=(s)=>{
    console.log(s);
    setim(s);
  }
  return (
    <section id="home" className='sm:pt-24 pb-8 pt-12 flex-col 
    lg:flex-row justify-center items-center sm:px-16 px-8 flex'>
      <div>
        <p className='text-primary text-lg'>Our Summer collections</p>
        <h1 className='bg-litile_orange z-10 relative text-8xl mt-10 font-bold'>
        The New Arrival <br />
        <span className='mt-3 inline-block text-primary'>Nike</span> Shoes
        </h1>
        <p className="text-lg text-mygray mt-6 mb-14">
        Discover stylish Nike arrivals, quality,<br/> comfort, and innovation for your active life
        </p>
        <a className="text-lg px-7 font-bold py-4 inline-block bg-primary  rounded-full" href="#home">shop now</a>
        <footer className="flex mt-20 flex-wrap w-full  gap-16">
          <article className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold">1K+</h3>
            <p className="text-mygray text-lg">brads</p>
          </article>
          <article className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold">500K+</h3>
            <p className="text-mygray text-lg">shops</p>
          </article>
          <article className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold">250K+</h3>
            <p className="text-mygray text-lg">customers</p>
          </article>
        </footer>
      </div>


      <div className='flex-1 bg-hero lg:min-h-screen flex flex-col justify-center items-center relative'>
       
       <img className="z-10 object-contain relative" width={610} height={600} src={im} alt="" />
       
        <ul className="lg:absolute bottom-0 flex justify-center items-center gap-2 ">
          <li ><img className={im==sh1&&" border-8 border-primary "} onClick={()=>{
            setim(sh1)
          }} width={150} height={100} src={sh1} alt="" /></li>
          <li><img className={im==sh2&&" border-8 border-primary "}
          onClick={()=>{
           setim(sh2)
          }} width={150} height={100} src={sh2} alt="" /></li>
          <li><img className={im==sh3&&" border-8 border-primary "}
          onClick={()=>{
            setim(sh3)
          }}  width={150} height={100} src={sh3} alt="" /></li>
        </ul>
      </div>
    </section>
  )
}

export default hero
