import React from 'react';
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

    toggleActive = () => {
        
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
                <h1 className="navbar-title">Victor Ontiveros • Frontend Developer</h1>
                <nav className="navbar-menu">
                    <button type="button" className="nav-item">
                        <a href="#projects">Projects</a>
                    </button>
                    <button type="button" className="nav-item">Certificates</button>
                    <button type="button" className="nav-item">Skills</button>
                    <button type="button" className="nav-item">Facts</button>
                    <button type="button" className="nav-item">Contact</button>
                    <button type="button" className="nav-item">
                        <a href="https://vicontiveros00.github.io/vics-cv/">My CV</a>
                    </button>
                </nav>
            </nav>
        )
    }
}

export default NavBar;