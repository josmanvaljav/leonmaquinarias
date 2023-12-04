import React, { useEffect } from 'react';
import './missionVision.css'
import { TbEyeCheck, TbTargetArrow } from 'react-icons/tb';
import Aos from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='missionVisionContainer grid'>
            <div className='mission'>
                <div className='mission_title'>
                    <TbTargetArrow className='mission_icon' />
                    <h3>Misión</h3>
                </div>
                <div>
                    <p>Desarrollarnos como empresa en el rubro de transporte y alquiler de maquinarias, dando una solución inmediata a nuestros clientes y generando gran satisfacción con la entrega de un producto y servicio de calidad.</p>
                </div>
            </div>
            <div className='vision'>
                <div className='vision_title'>
                    <TbEyeCheck className='vision_icon' />
                    <h3>Visión</h3>
                </div>
                <div>
                    <p>Ser reconocidos como la empresa mas eficiente en el transporte de carga pesada donde se garantice con el que se garantice nuestro servicio de alta calidad.</p>
                </div>
            </div>
        </div>
    );
};

export default MissionVision