import React, { useEffect } from 'react';
import './about.css'
import workersUp from '../../assets/Maquinaria-pesada.jpg'
import workersDown from '../../assets/Maquinaria-pesada.jpg'
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='about container section'>
            <div className="sectionContainer grid">
                <div className="imageContainer grid">
                    <div data-aos="fade-right" data-aos-duration="2500" className="imgDiv">
                        <img src={workersUp} />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2500" className="imgDiv">
                        <img src={workersDown} />
                    </div>
                </div>  
                <div className="textDiv grid">
                    <div className="tittleDiv flex">
                        <h2 data-aos="fade-left" data-aos-duration="2500">Acerca de nosotros</h2>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2500" className="singleGrid">
                        <p>
                            <b>León Maquinarias</b> es una empresa que opera desde 1990, año en que fue fundada y dirigida por <b>Urbano Ramiro León</b> Lescano como Gerente General en el rubro de Maquinarias Pesadas, empezando como persona natural con el patriarca de la familia Urbano León Ramos, el cual surge años mas tarde con su hijo el actual gerente de su propia empresa como Leon Maquinarias como nombre comercial y L&L MAQUINARIAS SAC como perona jurídica.
                        </p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2500" className="singleGrid">
                        <p>
                            <b>León Maquinarias</b> es una empresa que reune un staff de profesionales con experiencia en maquinaria pesada de última tecnología, demolición de edificios, nivelación de áreas, venta y transporte de agregados, alquiler de volquetes, cargadores y excavadoras. Nuestro objetivo es convertir las necesidades de nuestros clientes en una gran satisfacción e incrementar nuestra capacidad para aplicar nuevos retos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;