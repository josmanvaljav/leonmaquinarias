import React, { useEffect } from 'react';
import './footer.css'
import logoTwo from '../../assets/LogoFondoAzulTransp.png';
import {TiSocialFacebook} from "react-icons/ti";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {FaPinterestP} from "react-icons/fa";
import {IoLogoWhatsapp } from "react-icons/io";
import { whatsapp } from '../../Static/staticData'

import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='footer'>
            <a className="linkWhatsapp" href={whatsapp[0].url} target='_blank' rel='noreferrer'>
                <IoLogoWhatsapp  className="iconWhatsapp"/>
            </a>

            <div className="sectionContainer grid">
                <div data-aos="fade-up" data-aos-duration="2500" className="gridOne">
                    <div className="logoDiv">
                        <img src={logoTwo} className="logo" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500" className="footerText">
                    <p><b>SOLUCIONES</b> inmediatas en el rubro de transporte y preparación de agregados para la construccón y movimiento masivo de tierras.</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
                    <span className="linkTitle">Enlaces</span>
                    <Link to="/">
                        <li>
                            <a href="">Inicio</a>
                        </li>
                    </Link>
                    <Link to="/nosotros">
                        <li>
                            <a href="">Nosotros</a>
                        </li>
                    </Link>
                    <Link to="/servicios">
                        <li>
                            <a href="">Servicios</a>
                        </li>
                    </Link>
                    <Link to="/sectores">
                        <li>
                            <a href="">Sectores</a>
                        </li>
                    </Link>
                    <Link to="/contacto">
                        <li>
                            <a href="">Contacto</a>
                        </li>
                    </Link>
                </div>

                <div data-aos="fade-up" data-aos-duration="2500" className="socialNetwork">
                    <span className="linkTitle">Redes Sociales</span>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className='icon'/>
                        <AiOutlineTwitter className='icon'/>
                        <AiFillYoutube className='icon'/>
                        <FaPinterestP className='icon'/>
                    </div>
                </div>
            </div>

            <div className="copyRightDiv flex">
                <p>Designed | Developed by Callua Digital</p>
            </div>
        </div>
    );
};

export default Footer;