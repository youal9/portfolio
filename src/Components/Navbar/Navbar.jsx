import {useEffect, useState}from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, scroller} from 'react-scroll';
import './Navbar.css'
import logo from "../../assets/yw1.png";


const Navbar = () => {

    const [click, setClick] = useState(false)

    const [sticky, setSticky] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 100 ? setSticky(true) : setSticky(false);
        })


         // Scrolla till "Home"-sektionen när sidan laddas
        scroller.scrollTo('Home', {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    },[])

    

    const handleClick = () =>{
        setClick(!click)
    }

  return (
    <div className={`header ${sticky? 'dark-nav':''  }`} >
        <nav className='navbar'>
        <Link to="Home" smooth={true} duration={500}  className='logo'>
          <img src={logo} alt="logo" />
        </Link>

            
            <div className="hamburger" onClick={handleClick}>
                {click ?(<FaTimes className="icon"   />) :<FaBars className="icon"    />   }
             
            </div>
            
            <ul className={click ?'nav-menu active': 'nav-menu' }>
                <li className='nav-item'>
                <Link to="Home" smooth={true} duration={500} onClick={handleClick}>Home</Link>
                </li>
                
                <li className='nav-item'>
                <Link to="skills" smooth={true}  duration={500} offset={25}  onClick={handleClick}>Skills</Link>
                </li>
                <li className='nav-item'>
                <Link to="projects" smooth={true}  duration={500} offset={-80}  onClick={handleClick}>project</Link>
                </li>
                <li className='nav-item'>
                <Link to="contact" smooth={true} duration={500} onClick={handleClick}>Contact</Link>
                </li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
