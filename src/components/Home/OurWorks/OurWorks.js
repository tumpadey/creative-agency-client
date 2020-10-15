import React from 'react';

import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import './OurWork.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const OurWorks = () => {
    return (
        <section className="testimonials">
        <h1 className="text-white my-5">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
        <Carousel>

            <div className="carousel-inner">
                <img src={carousel1} />
               
            </div>
            <div className="carousel-inner">
                <img src={carousel2} />
                
            </div>
            <div className="carousel-inner">
                <img src={carousel3} />
                
                
            </div>

        </Carousel>
    </section>
    );
};

export default OurWorks;