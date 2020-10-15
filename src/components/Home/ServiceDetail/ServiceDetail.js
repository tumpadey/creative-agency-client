import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    const {id, picture, title, description} = service;
    return (
        <div className="card services-card my-5" style={{ height: 250 }}>
                <div className="card-body">
                    <img src={picture} alt="" style={{ height: '40px' }} />
                    <h3 className="text-dark">{title}</h3>
                    <p className="text-secondary">{description}</p>
                </div>
        </div>
    );
};

export default ServiceDetail;