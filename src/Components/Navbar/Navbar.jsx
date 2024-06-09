import React, {useState}from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'
import logo from "../../assets/Y.png";


const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () =>{
        setClick(!click)
    }

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href="/" className='logo'>
             <img src={logo} alt="logo" />
            </a>
            
            <div className="hamburger" onClick={handleClick}>
                {click ?(<FaTimes className="icon"   />) :<FaBars className="icon"    />   }
             
            </div>
            
            <ul className={click ?'nav-menu active': 'nav-menu' }>
                <li className='nav-item'>
                    <a href="">Home</a>
                </li>
                <li className='nav-item'>
                    <a href="">About</a>
                </li>
                <li className='nav-item'>
                    <a href="">Skills</a>
                </li>
                <li className='nav-item'>
                    <a href="">Projekt</a>
                </li>
                <li className='nav-item'>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
