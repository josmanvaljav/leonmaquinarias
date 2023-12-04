import React, { useEffect, useState } from 'react';
import './navbar.css'
import { CgMenuGridO } from "react-icons/cg"
import logoFondoBlanco from "../../assets/LogoFondoBlanco.png"
import logoFondoAzul from "../../assets/LogoFondoAzulTransp.png"
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineMobile } from 'react-icons/ai';
import { navBarItems } from '../../Static/staticData.jsx'

const Navbar = ({active}) => {
    // const [active, setActive] = useState(2);
    const [isMobile, setIsMobile] = useState()
    const [isScrollDown, setIsScrollDown] = useState(false)
    const [removeBar, setRemoveBar] = useState(false)
    const [popupBar, setPopupBar] = useState(false)
    // const [addBg, setAddBg] = useState("navBarTwo flex");

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
            setIsScrollDown(true);
            setRemoveBar(true)
        } else {
            setIsScrollDown(false);
        }
    }, [])

    const scrollWindow = () => {
        if (window.scrollY >= 10) {
            setIsScrollDown(true);
            if (!isMobile) {
                setRemoveBar(true);
            }
        } else {
            setIsScrollDown(false);
            if (isMobile) {
                setRemoveBar(true);
            } else {
                setRemoveBar(false);
            }
        }
    };
    window.addEventListener("scroll", scrollWindow);
    
    const resizeWindow = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true)
            setRemoveBar(true);
        } else {
            if (!isScrollDown) {
                setRemoveBar(false);
            } else {
                setRemoveBar(true);
            }
            setIsMobile(false)
            setPopupBar(false)
        }
    }
    window.addEventListener("resize", resizeWindow);

    return (
        <div className='navBars'>
            {/* Firt bar */}
            <div className={`firstBar flex ${isMobile ? "none" : ""} ${removeBar ? "none" : ""}`}>
                <div className='firstBarLogo'>
                    <Link to="/">
                        <img src={logoFondoBlanco} alt="Logo_fondo_blanco" />
                    </Link>
                </div>
                <div className='firstBarInfo flex'>
                    <div className='firstBarContent flex'>
                        <div className='firstBarIconDiv flex'>
                            <AiOutlineMobile className='firstBarIcon' />
                        </div>
                        <p>999 9999 99</p>
                    </div>
                    <div className='firstBarContent flex'>
                        <div className='firstBarIconDiv flex'>
                            <AiOutlineMail className='firstBarIcon' />
                        </div>
                        <p>contacto@leonmaquinarias.com</p>
                    </div>
                </div>
            </div>

            {/* Second bar*/}
            <div className='secondBar flex'>
                <div className={`secondBarLogo ${removeBar ? "" : "none"}`}>
                    <Link to="/">
                        <img src={logoFondoAzul} alt="Logo_fondo_azul" />
                    </Link>
                </div>
                <div className={`secondNavBar ${isMobile ? "none" : "flex"}`}>
                    {
                        navBarItems && navBarItems.map((item, index) => (
                            <div key={index} className={`navBarTitleDiv ${active === index + 1 ? "active" : ""}`}>
                                <Link to={item.url} className='navBarTitle'>
                                    {item.title}
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className={`secondBarButton ${isMobile ? "none" : ""}`}>
                    <Link to="/contacto">
                        <button className="btn2 flex">Contacto</button>
                    </Link>
                </div>
                <div className={`toggleIcon ${isMobile ? "" : "none"}`}>
                    <CgMenuGridO className='icon'
                        onClick={() => setPopupBar(!popupBar)}
                    />
                </div>
            </div>

            {/* Navbar popup */}
            {
                popupBar ? (
                    <div className='popupBar flex'>
                        <div className='popupMargin'>
                            <div className={`popupNavBar`}>
                                {
                                    navBarItems && navBarItems.map((item, index) => (
                                        <div key={index} className={`popupBarTitleDiv`}>
                                            <Link to={item.url} className='popupBarTitle'
                                                onClick={() => setPopupBar(false)}
                                            >
                                                {item.title}
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={`popupBarButton`}>
                                <Link to="/contacto">
                                    <button className="btn flex"
                                        onClick={() => setPopupBar(false)}
                                    >
                                        Contacto
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Navbar;