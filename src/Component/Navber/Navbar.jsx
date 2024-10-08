
import './Navbar.css'; 
import logo from '../../assets/Logo/logo.webp'
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
      <nav className="navbaR">
        <div className="navbar-container ">
          <img src={logo} alt="My Logo" className="navbar-logo" /> 
          <ul className="navbar-links ">
           <div className='flex items-center md:gap-x-10 lg:gap-x-10 lg:mr-96 font-bold'>
           <li><a href="#home">Home</a></li>
            <li><a href="#about">Recipes</a></li>
            <li><a href="#services">About</a></li>
            <li><a href="#contact">Services</a></li>
           </div>
            
            <div className="">
          <input  type="text" placeholder="Search..." className="search-input" />
          <IoSearch className='search-icon'></IoSearch>
         
        </div>
        

          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;