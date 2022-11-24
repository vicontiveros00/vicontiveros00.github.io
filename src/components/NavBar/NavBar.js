import React from 'react';
import logos from '../../util/logos';
import './NavBar.css'

class NavBar extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            toggleMenu: ''
        }
        this.toggleMenuOpen = this.toggleMenuOpen.bind(this);
    }

    toggleMenuOpen = () => {
        this.setState({
            toggleMenu: this.state.toggleMenu === 'open' ? '' : 'open'
        })

        //console.log(this.state.toggleMenu);
    }

    render() {
        const classNameForBurger = `navbar-burger ${this.state.toggleMenu}`;
        const classNameForOverlay = `navbar-overlay ${this.state.toggleMenu}`;
        const classNameForNavbar = `navbar ${this.state.toggleMenu}`;

        return (
            <nav className={classNameForNavbar}>
                <div className={classNameForOverlay} onClick={this.toggleMenuOpen}></div>
                <button type="button" className={classNameForBurger} onClick={this.toggleMenuOpen}>
                    <span className="material-icons">menu</span>
                </button>
                <p className="navbar-title">Vic • Frontend Developer</p>
                <nav className="navbar-menu">
                    <button onClick={this.toggleMenuOpen} type="button" className="nav-item">
                        <a href="#projects">Projects</a>
                    </button>
                    <button onClick={this.toggleMenuOpen} type="button" className="nav-item">
                        <a href="#certificates">Certificates</a>
                    </button>
                    <button onClick={this.toggleMenuOpen} type="button" className="nav-item">
                        <a href="#skills">Skills</a>
                    </button>
                    <button onClick={this.toggleMenuOpen} type="button" className="nav-item">
                        <a href="#facts">Facts</a>
                    </button>
                    <button onClick={this.toggleMenuOpen} type="button" className="nav-item">
                        <a href="#contact">Contact</a>
                    </button>
                    <button onClick={this.toggleMenuOpen} type="button" className="nav-item">
                        <a target="_blank" href="https://vicontiveros00.github.io/vics-cv/">My CV</a>
                    </button>
                    <button onClick={this.toggleMenuOpen} type="button" className="nav-item">
                        <a target="_blank" href="https://github.com/vicontiveros00">{logos.github}</a>
                    </button>
                    <button onClick={this.toggleMenuOpen} type="button" className="nav-item">
                        <a target="_blank" href="https://www.linkedin.com/in/vicontiveros/">{logos.linkedin}</a>
                    </button>
                </nav>
            </nav>
        )
    }
}

export default NavBar;