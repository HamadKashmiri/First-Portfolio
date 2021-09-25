import React from 'react';
import logo from '../logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="hold"><img className="logo" src={logo} alt="logo..."/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar-default" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="hold">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="hold">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="hold">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="hold">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="hold">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="hold">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
