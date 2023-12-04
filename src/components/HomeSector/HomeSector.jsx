import React, { useEffect } from 'react';
import './homeSector.css'
import image_front from "../../assets/Blank.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeSector = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='homeSector'>
            <div data-aos="fade-up" data-aos-duration="2500" className="homeImages flex">
                <img src={image_front} className="imageFront" />
            </div>
            <div className="mainText">
                <h1 data-aos="fade-up" data-aos-duration="2500">Sectores</h1>
                <h2 data-aos="fade-up" data-aos-duration="2500">___________</h2>
            </div>
        </div>
    );
};

export default HomeSector;
