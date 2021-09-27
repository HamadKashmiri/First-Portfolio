import React from 'react';
import TypeAnim from 'react-typed';

const Header = () => {
    return (
        <div id="home" className= "header-wrapper">
            <div className="main-info">
                <h1>Hamad Kashmiri Portfolio</h1>
                <TypeAnim 
                    className="typed-text" 
                    strings={["Hi", "Im Hamad", "Im a Software Developer", "You have a large Forehead"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop={true}
                />
                <a href="hold" className="header-btn">Contact Me</a>
            </div>
        </div>
    )
}

export default Header
