import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import MediaServices from '../MediaServices/MediaServices';
import OurWorks from '../OurWorks/OurWorks';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';




const Home = () => {
    return (
        <div>
            <Header></Header>
            <MediaServices></MediaServices>
            <Services></Services>
            <OurWorks></OurWorks>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
            
           
          
        </div>
    );
};

export default Home;