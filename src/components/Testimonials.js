import React from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>My Feedback</h1>
            <div className="container">
                <div className="testimonials-content">
                <TestimonialsCarousel 
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    interval={3000}
                />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
