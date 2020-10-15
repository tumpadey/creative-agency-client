import React from 'react';

const Footer = () => {
    return (
        <footer>
        <p style={{ backgroundColor: '#FBD062',fontSize:'20px' }}
         className="text-center py-5">
             copyright Orange labs {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;