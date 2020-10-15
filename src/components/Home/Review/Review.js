import React from 'react';

const Review = ({reviewData}) => {

    const {picture, name, designation, review} = reviewData;
    return (
        <div className="card">
        <div className="mt-3 d-flex  align-items-center">
            <img className="mx-3" src={picture} alt="" width="60" />
            <div>
                <h6>{name}</h6>
                <p className="m-0">{designation}</p>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text text-secondary">{review}</p>
        </div>

    </div>
    );
};

export default Review;