import logo from '../assets/images/header-logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
function Nav() {
  return (
    <div  className=' flex w-full  flex-wraps sm:px-16 px-8 z-10 py-8 items-center justify-between'> 
      <div className="logo">
        <img src={logo} width={130} height={29} alt="logo" />
      </div>
      <nav>
        <ul className='hidden lg:flex text-lg flex-wrap gap-6 text-mygray'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#products">products</a></li>
            <li><a href="#conatc">conatc</a></li>
        </ul>
      </nav>
      <nav>
        <ul  className='hidden lg:flex gap-1'>
            <li><a href="">sign up</a></li>
            <li><a href="">/</a></li>
            <li><a href="">rigester</a></li>
        </ul>
      </nav>
      <div  className='lg:hidden'>
        <img width={29} height={29}  src={hamburger} alt="" />
      </div>
    </div>
  )
}

export default Nav
