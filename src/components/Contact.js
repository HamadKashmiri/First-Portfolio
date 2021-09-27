import React from 'react'

const Contact = () => {
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please Complete the form below for any enquiries. I will respond as soon as possible.</p>
            </div>   
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xm-12">
                        <input 
                        type="text"
                        className="form-control" 
                        placeholder="Name" 
                        name="name"/>
                        <input 
                        type="text"
                        className="form-control" 
                        placeholder="Phone Number" 
                        name="phone"/>
                        <input 
                        type="email"
                        className="form-control" 
                        placeholder="Email" 
                        email="email"/>
                        <input 
                        type="text"
                        className="form-control" 
                        placeholder="Subject" 
                        name="subject"/>
                    </div>
                    <div className="col-md-6 col-xm-12">
                        <textarea 
                            type="text"
                            className="form-control" 
                            placeholder="Description" 
                            name="description">    
                        </textarea>
                        <button className="btn btn-outline-warning contact-btn" type="submit">Submit</button>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Contact
