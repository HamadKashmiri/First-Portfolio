import React from 'react';
import logo from '../logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="hold"><img className="logo" src={logo} alt="logo..."/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar-default" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link offset={-110} smooth={true} to="home" className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link offset={-110} smooth={true} to="about" className="nav-link" href="#">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link offset={-110} smooth={true} to="services" className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link offset={-110} smooth={true} to="experience" className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link offset={-110} smooth={true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link offset={-110} smooth={true} to="testimonials" className="nav-link" href="#">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link offset={-110} smooth={true} to="contact" className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
