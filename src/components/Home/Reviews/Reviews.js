import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png'
import Review from '../Review/Review';

const review = [
    
    {
        name:'Nasa Patrik',
        picture:customer1,
        designation:'CEO, Manpol',
        review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
    },
    {
        name:'Mirium Barron',
        picture:customer2,
        designation:'CTO, Manpol',
        review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
    },
    {
        name:'Brai Malone',
        picture:customer3,
        designation:'CEO, Manpol',
        review:'Lorem ipsum dolor sit amet, consectetur  elit. Purus commodo ipsum duis laoreet maecenas. Feugiat'
    },

]

const Reviews = () => {
    
    return (
        <section style={{ margin: 100 }}>
            <div className="container">
                <div>
                    <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
                </div>
                <div style={{marginTop:'100px'}} className="card-deck">
                    {
                        review.map(reviewData =><Review reviewData={reviewData} key={reviewData}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;