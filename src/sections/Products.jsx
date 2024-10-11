
import Card from './../components/card';
import shoe4 from '../assets/images/shoe4.svg';
function Products() {
  return (
    <section className=" sm:pb-24 pb-12">
      <h2 className="text-4xl font-bold">
      Our <span className="text-primary">Popular</span> Products
      </h2>
      <p className="text-mygray mt-2">
      Experience top-notch quality and style with our sought-after<br/>
       selections. Discover a world of comfort, design, and value
      </p>
      <main className="sm:justify-center gap-14 lg:grid lg:grid-cols-4 flex sm:gap-6 md:gap-6 flex-wrap mt-16">
        <Card img={shoe4}
        price={"$210.20"} r='
(4.5)' p={"Nike Air Jordan-10"}/>
         <Card img={shoe4}
        price={"$210.20"} r='
(4.5)' p={"Nike Air Jordan-10"}/>
           <Card img={shoe4}
        price={"$210.20"} r='
(4.5)' p={"Nike Air Jordan-10"}/>
             <Card img={shoe4}
        price={"$210.20"} r='
(4.5)' p={"Nike Air Jordan-10"}/>
      </main>
    </section>
  )
}

export default Products
