import React, { useState } from 'react';
import NavBarElements from './NavBarElements';
import './NavBar.css'

const NavBar = () => {
    const [ isNavBarActive, setIsNavBarActive ] = useState('');
    const classNameForBurger = `navbar-burger ${isNavBarActive}`;
    const classNameForOverlay = `navbar-overlay ${isNavBarActive}`;
    const classNameForNavbar = `navbar ${isNavBarActive}`;

    const toggleMenu = () => {
        setIsNavBarActive(isNavBarActive === 'active' ? '' : 'active');
    }

    return (
        <nav className={classNameForNavbar}>
            <div className={classNameForOverlay} onClick={() => toggleMenu()}></div>
            <button type="button" className={classNameForBurger} onClick={() => toggleMenu()}>
                <span className="material-icons">menu</span>
            </button>
            <p className="navbar-title">Vic • Frontend Developer</p>
            <nav className="navbar-menu">
                {NavBarElements.map(({ title, href, toNewTab }) => {
                    return (
                        <button key={title} onClick={() => toggleMenu()} type="button" className="nav-item">
                            <a target={toNewTab ? '_blank' : '_self'} rel='noreferrer' href={href}>{title}</a>
                        </button>
                    )
                })}
            </nav>
        </nav>
    )
}

export default NavBar;