import React, { useRef, useState } from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () =>{
        menuRef.current.style.right = "0";
    }
    const closeMenu = () =>{
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="logo" className='logo' />
            <GiHamburgerMenu onClick={openMenu} className='nav-mob-open'/>
            <ul ref={menuRef} className='nav-menu'>
                <RxCross2 onClick={closeMenu}  className='nav-mob-close' />
                <li><AnchorLink className='anchor-link' href="#home"><p onClick={() => setMenu("home")}>Home</p></AnchorLink></li>

                <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={() => setMenu("about")}>About Me</p></AnchorLink></li>

                <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={() => setMenu("services")}>Services</p></AnchorLink></li>

                <li><AnchorLink className='anchor-link' offset={50} href="#work"><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink></li>

                <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink></li>

            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me</AnchorLink></div>
        </div>
    )
}

export default Navbar
