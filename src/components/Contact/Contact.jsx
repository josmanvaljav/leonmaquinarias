import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdLocationOn, MdEmail, MdPhone, MdWhatsapp } from "react-icons/md"

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uk9bd55', 'template_iwrfk3s', form.current, 'cA-8noRuXcpcmb1uO')
            .then((result) => {
                console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                }
            );
    };

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='contact container section'>
            <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer grid">
                <div className="searchInputs grid">
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconGroup flex">
                            <div className="iconDiv">
                                <MdLocationOn className="icon"/>
                            </div>
                        </div>
                        <div className="texts">
                            <h2>Dirección</h2>
                            <h4>Calle Los Laureles 325, Lurigancho</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconGroup flex">
                            <div className="iconDiv">
                                <MdEmail className="icon"/>
                            </div>
                        </div>
                        <div className="texts">
                            <h2>Email</h2>
                            <h4>contacto@leonmaquinaria.com</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconGroup flex">
                            <div className="iconDiv">
                                <MdPhone className="icon"/>
                            </div>
                            <div className="iconDiv">
                                <MdWhatsapp className="icon"/>
                            </div>
                        </div>
                        <div className="texts">
                            <h2>Teléfono / Whatsapp</h2>
                            <h4>+51 999 999 999</h4>
                        </div>
                    </div>
                </div>
                <div className="formContainer grid">
                    <div className="tittleDiv flex">
                        <h4 data-aos="fade-up" data-aos-duration="2500">Enviar mensaje</h4>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="formElement grid">
                        <div data-aos="fade-up" data-aos-duration="2500" className="formSection">
                            <label>Tu Nombre:</label>
                            <div>
                                <input type="text" name="user_name" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2500" className="formSection">
                            <label>Tu Email:</label>
                            <div>
                                <input type="email" name="user_email" />
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2500" className="formSection">
                            <label>Mensaje:</label>
                            <div>
                                <textarea name="message" />
                            </div>
                        </div>
                        <input data-aos="fade-up" data-aos-duration="2500" type="submit" value="Enviar" className="btn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;