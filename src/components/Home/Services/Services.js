import React from 'react';
import design from '../../../images/icons/service1.png';
import graphics from '../../../images/icons/service2.png';
import development from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData =[
    {
        id:0,
        title:'Web & Mobile design',
        picture:design,
        description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.' 
    },
    {   id:1,
        title:'Graphic design',
        picture:graphics,
        description:'Amazing flyers, social media posts and brand representations that would make your brand stand out..'
    },
    {   id:2,
        title:'Web development',
        picture:development,
        description:' With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },
]

const Services = () => {
    return (
        <section className="services-container text-center mt-5">
            <div >
            <h1 className="mb-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>
            </div>
            <div className="d-flex">
               {
                 serviceData.map(service => <ServiceDetail service={service} key={service.id}></ServiceDetail>)  
               }
            </div>
        </section>
    );
};

export default Services;