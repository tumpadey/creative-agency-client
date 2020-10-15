import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Services from '../../Home/Services/Services';

const ServiceList = () => {
    return (
        <div className="row">
            <Sidebar></Sidebar>
            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>
            <Services></Services>
            </div>
        </div>
    );
};

export default ServiceList;