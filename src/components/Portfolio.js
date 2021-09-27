import React from 'react';
import reactthumb from '../reactthumb.png';
import apithumb from '../apithumb.png';
import swirlthumb from '../swirlthumb.png';
import recifythumb from '../recifythumb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css'

const Portfolio = () => {

    const openPopupboxFittness = () => {
        const content = (
            <>
                <iframe className="portfolio-iframe-popup-box" src="https://www.youtube.com/embed/v=EVUu2KqjvLA" title="React Fittness" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                <p>This project is a mock of a fittness website created with React. There are multiple components in this SPA including a dashboard</p>
                <b>Github: </b> 
                <a className="hyper-link" onClick={() => window.open("https://github.com/HamadKashmiri/ReactFittness")}>https://github.com/HamadKashmiri/ReactFittness</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigReact = {
        titleBar: {
            enable: true,
            text: "React Fittness Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxSwirl = () => {
        const content = (
            <>
                <iframe className="portfolio-iframe-popup-box" src="https://www.youtube.com/embed/v=1LYCNJX_NMU" title="Swirl" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                <p>This software is one of three created for an escape room company - Bust Out 360. They
                use it to control their rooms</p>
                <b>Github: unavailable</b> 
                <a className="hyper-link" onClick={() => window.open("")}>Sorry this project is no longer hosted on Github</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigSwirl = {
        titleBar: {
            enable: true,
            text: "Swirl Escape Room Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxApi = () => {
        const content = (
            <>
                <iframe className="portfolio-iframe-popup-box" src="https://www.youtube.com/embed/v=PIXqR-YiDGc" title="Dogs Api" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                <p>This is a fullstack Javascript website using the MERN stack. It functions using a Rest Api</p>
                <b>Github Frontend: </b> 
                <a className="hyper-link" onClick={() => window.open("https://github.com/HamadKashmiri/DogCharityFrontendReactBootstrap")}>https://github.com/HamadKashmiri/DogCharityFrontendReactBootstrap</a>
                <br></br>
                <b>Github: Backend: </b> 
                <a className="hyper-link" onClick={() => window.open("https://github.com/HamadKashmiri/DogCharityBackendApi")}>https://github.com/HamadKashmiri/DogCharityBackendApi</a>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigApi = {
        titleBar: {
            enable: true,
            text: "Dog Charity Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    const openPopupboxRecify = () => {
        const content = (
            <>
                <iframe className="portfolio-iframe-popup-box" src="https://www.youtube.com/embed/v=C0kyGwSyYYg" title="Recify" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                <p>This is an Android application utilising a number of Androids features, including 2 databases aswell as a machine learning api</p>
                <b>Github: </b> 
                <a className="hyper-link" onClick={() => window.open("https://github.com/HamadKashmiri/Recify")}>https://github.com/HamadKashmiri/Recify</a>

            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigRecify = {
        titleBar: {
            enable: true,
            text: "Android Recipe App Project"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    
    

    return (
        <div className="portfolio-container">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="d-sm-flex col image-box-container">
                    <div className="portfolio-image-box" onClick={openPopupboxFittness}>
                        <img className="portfolio-image" alt="reactthumb "src={reactthumb}/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxSwirl}>
                        <img className="portfolio-image" alt="swirlthumb "src={swirlthumb}/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxApi}>
                        <img className="portfolio-image" alt="apithumb "src={apithumb}/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
                    <div className="portfolio-image-box" onClick={openPopupboxRecify}>
                        <img className="portfolio-image" alt="recifythumb "src={recifythumb}/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon icon={faSearchPlus} className="portfolio-icon"/>
                    </div>
                </div>
                <div className="d-flex">

                <a href="https://hamadkashmiri.wordpress.com/" className="port-btn">All Demos</a>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigReact} />
            <PopupboxContainer {...popupboxConfigSwirl} />
            <PopupboxContainer {...popupboxConfigApi} />
            <PopupboxContainer {...popupboxConfigRecify} />
        </div>
    )
}

export default Portfolio
