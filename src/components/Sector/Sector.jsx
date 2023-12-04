import React, { useEffect } from 'react';
import './sector.css'
// import { AiFillBank } from "react-icons/ai"
// import { BiStoreAlt } from "react-icons/bi"
import { BsMinecartLoaded } from "react-icons/bs"
import { TbRoad } from "react-icons/tb"
import { GiMineTruck } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

// import { MdMenuBook, MdPrecisionManufacturing, MdSettingsInputAntenna, MdOutlineEmojiTransportation, MdOutlineTransferWithinAStation } from "react-icons/md"

import Aos from "aos";
import "aos/dist/aos.css";

const Sector = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className='sector container section'>
            <div data-aos="fade-up" data-aos-duration="2500" className="sectionContainer grid">
                <div data-aos="fade-up" data-aos-duration="2000" className="description">
                    <h2 data-aos="fade-down" data-aos-duration="2500">Sectores</h2>
                    <div data-aos="fade-down" data-aos-duration="2500" className="singleGrid">
                        <p>
                            León Maquinarias ha participado en proyectos de los siguientes sectores.
                        </p>
                    </div>
                </div>
                <div className="searchInputs grid">
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <BsMinecartLoaded className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Minería</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <TbRoad className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Carreteras</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <HiOutlineBuildingOffice2 className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Construcciones</h4>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className="singleInput flex">
                        <div className="iconDiv">
                            <GiMineTruck className="icon"/>
                        </div>
                        <div className="texts">
                            <h4>Transporte de material</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sector;