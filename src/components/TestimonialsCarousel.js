import React from 'react'
import { Carousel }from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import avatar1 from '../avatars/avatar-1.png'
import avatar2 from '../avatars/avatar-2.png'
import avatar3 from '../avatars/avatar-3.png'
import avatar4 from '../avatars/avatar-4.png'


const TestimonialsCarousel = () => {
    return (
        <Carousel>
            <>
                <img src={avatar3} alt="Adrees avatar"/>
                <div className="my-carousel">
                    <h3>Adrees Hussain</h3>
                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="person two"/>
                <div className="my-carousel">
                    <h3>Get Someone Else</h3>
                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
            </>
            <>
                <img src={avatar1} alt="person three"/>
                <div className="my-carousel">
                    <h3>Andy Person</h3>
                    <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialsCarousel
