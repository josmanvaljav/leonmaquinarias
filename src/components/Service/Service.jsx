import React, { useEffect } from 'react';
import './service.css'
import desarrolloSoftware from "../../assets/Blank.jpg"
import consultoria from "../../assets/Blank.jpg"
import gestionProyectos from "../../assets/Blank.jpg"
import dataScience from "../../assets/Blank.jpg"
import realidadVirtual from "../../assets/Blank.jpg"
import disenioGrafico from "../../assets/Blank.jpg"

import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='service section'>
            <div className="infoContainer container">
                <div className="textDiv">
                    <div className="tittleDiv flex">
                        <h2 data-aos="fade-up" data-aos-duration="2500">Servicios</h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2500" className="singleText">
                        <p>
                            Ofrecemos SOLUCIONES inmediatas en el rubro de transporte y preparación de agregados para la construcción conjuntamente con el movimiento masivo de tierras.
                        </p>
                    </div>
                </div>
                <div className="cardsDiv grid">
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={desarrolloSoftware} className='icon' />
                        </div>
                        <span className="cardTittle">Movimiento de tierras</span>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={consultoria} className='icon' />
                        </div>
                        <span className="cardTittle">Alquiler de maquinaria</span>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleCard grid">
                        <div className="iconDiv flex">
                            <img src={gestionProyectos} className='icon' />
                        </div>
                        <span className="cardTittle">Transporte y venta de agregados</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;