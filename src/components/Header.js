import React from 'react';
import "./Header.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Header = () => {
    
    return (
        <div className="header" data-aos="zoom-in">
            <div className="logo">Pokemon App</div>
        </div>
    );
};

export default Header;
