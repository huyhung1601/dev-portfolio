import { useState,useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import './navbar.scss'
const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleMenu =() =>{
        setOpenMenu(prev => !prev)
    }
    
    return (
        <nav className={`navbar ${openMenu ? 'active' :null}`}>
            <label className='logo' htmlFor="">
                <h4>DevOps</h4>
                <h4>DevOps</h4>
            </label>
            <ul className={openMenu ? 'active' :null}>
                <li>
                    <a className='active' href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <label className='menu-icon' onClick={handleMenu}>
                <GiHamburgerMenu />
            </label>
        </nav>
    )
}

export default Navbar
