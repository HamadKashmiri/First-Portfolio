import React from 'react'
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TwitterIcon, TwitterShareButton } from 'react-share'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-sm-6">
                        <div className="d-flex">
                            <p>k.hamad@hotmail.co.uk</p>
                        </div>
                        <div className="d-flex">
                            <p>07830993929</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-lg-3 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About</a>
                                <br/>
                                <a className="footer-nav">Services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Experience</a>
                                <br/>
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                            url={"https://www.youtube.com/channel/UCEncuHbG9vj8md6xIfL85Yg"}>
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                            url={"https://www.youtube.com/channel/UCEncuHbG9vj8md6xIfL85Yg"}>
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>
                            <LinkedinShareButton
                            url={"https://www.youtube.com/channel/UCEncuHbG9vj8md6xIfL85Yg"}>
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                            <RedditShareButton
                            url={"https://www.youtube.com/channel/UCEncuHbG9vj8md6xIfL85Yg"}>
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>
                        </div>
                    </div>

                </div>
            </div>    
        </div>
    )
}

export default Footer
