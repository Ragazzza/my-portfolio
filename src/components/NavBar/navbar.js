import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbarBody'>
            <div className='navbar'>
                <img src={logo} alt='Logo'className='logo' onClick={() => {
                    document.getElementById('intro').scrollIntoView({behavior: 'smooth'});
                }}/>
                <div className='desktopMenu'>
                    <Link activeClass='active' to='about' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>About</Link>
                    <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-80} duration={500}className='desktopMenuListItem'>Experience</Link>
                    <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-80} duration={500}className='desktopMenuListItem'>Projects</Link>
                    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500}className='desktopMenuListItem'>Contacts</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar