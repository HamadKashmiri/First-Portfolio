import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faQuestionCircle, faServer, faUsers } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="fonticon" icon={faDesktop} size={"2x"}/>
                            </div>
                            <h3>Frontend Development</h3>
                            <p>Tag line sort of thing here bla extra words so looks right about this long.</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="icon" src="https://img.icons8.com/cute-clipart/36/000000/react-native.png" alt="react"/>
                                    <img className="icon" src="https://img.icons8.com/color/36/000000/bootstrap.png" alt="bootstrap"/>  
                                    <img className="icon" src="https://img.icons8.com/ios/36/000000/typescript.png" alt="ts"/>                                  
                                    <img className="icon" src="https://img.icons8.com/color/36/000000/sass-avatar.png" alt="sass"/>                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="fonticon" icon={faServer} size={"2x"}/>
                            </div>
                            <h3>Backend Development</h3>
                            <p>Tag line sort of thing here bla extra words so looks right about this long.</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="icon" src="https://img.icons8.com/color/36/000000/nodejs.png" alt="node"/>
                                    <img className="icon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/36/000000/external-database-cyber-security-kiranshastry-lineal-color-kiranshastry-2.png" alt="database"/>                                    
                                    <img className="icon" src="https://img.icons8.com/color/36/000000/php.png" alt="icon"/>
                                    <img className="icon" src="https://img.icons8.com/color/36/000000/amazon-web-services.png" alt="aws"/>                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="fonticon" icon={faUsers} size={"2x"}/>
                            </div>
                            <h3>UI and UX Design</h3>
                            <p>Tag line sort of thing here bla extra words so looks right about this long.</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="icon" src="https://img.icons8.com/fluency/36/000000/adobe-xd.png" alt="xd"/>
                                    <img className="icon" src="https://img.icons8.com/color/36/000000/figma--v2.png" alt="figma"/>                                   
                                    <img className="icon" src="https://img.icons8.com/color/36/000000/solidworks.png"alt="solidworks"/>                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="fonticon" icon={faQuestionCircle} size={"2x"}/>
                            </div>
                            <h3>something else</h3>
                            <p>Tag line sort of thing here bla extra words so looks right about this long.</p>
                            <div className="row">
                                <div className="col-md-12 justify-content-center">
                                    <img className="icon" src="https://img.icons8.com/fluency/36/000000/adobe-xd.png" alt="xd"/>
                                    <img className="icon" src="https://img.icons8.com/fluency/36/000000/adobe-xd.png" alt="xd"/>    
                                    <img className="icon" src="https://img.icons8.com/fluency/36/000000/adobe-xd.png" alt="xd"/>
                                    <img className="icon" src="https://img.icons8.com/fluency/36/000000/adobe-xd.png" alt="xd"/>                                                           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Services
