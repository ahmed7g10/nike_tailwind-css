import Nav from "./components/Nav";
import Opnion from "./sections/Opnion";
import Products from "./sections/Products";
import Provide from "./sections/Provide";
import Update from "./sections/Update";
import Hero from "./sections/hero";
import Offer from "./sections/offer";
import Footer from './sections/Footer';
const App = () => {
  return (
    <div className="max-container" >
    <div className=" mx-auto " >
      <Nav/>
      <Hero/>
      <Products/>
      <Provide/>
      <Offer/>
     
    </div>
    <Opnion/>
    <div  className="w-container_big mx-auto ">
      <Update/>
    </div>
    <footer className="bg-black text-white">
      <div className="w-container_big mx-auto ">
          <Footer/>
      </div>
    </footer>
    </div>
  );
}

export default App;
