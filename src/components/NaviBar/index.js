import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { changeLang } from '../../features/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, faFolderOpen, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.scss'
import usa from '../../assets/imagenes/uk.png';
import spain from '../../assets/imagenes/spain.png';

const NaviBar = () => {

    const dispatch = useDispatch();

    const esp = {
        image: spain,
        alternative: 'esp'
    }

    const eng = {
        image: usa,
        alternative: 'eng'
    }

    //-------------------Burger Menu--------------------------
    const [BurgerClass, setBurgerClass] = useState("Burger-Bar Unclicked")
    const [menuClass, setMenuClass] = useState("Hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const [lang, setLang] = useState(false)
    
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("Burger-Bar Clicked")
            setMenuClass("Visible")
        }
        else {
            setBurgerClass("Burger-Bar Unclicked")
            setMenuClass("Hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }
    
    const reset = () => {
        if(isMenuClicked){
            setBurgerClass("Burger-Bar Unclicked")
            setMenuClass("Hidden")
            setIsMenuClicked(false)
        }
    }

    const changeLan = () => {
        setLang(!lang)
        dispatch(changeLang(!lang))
    }
    //-------------------End Burger Menu----------------------

    return (
        <div className='Nav-Bar'>

            <div className='inner'>
                <Link className='Logo' to='/'>
                    <span>&lt;FedeMoya&gt;</span>
                </Link>
                <img
                    onClick={changeLan}
                    src={lang? esp.image : eng.image} 
                    alt={lang? esp.alternative : eng.alternative}
                    className={`flag`}
                />
            </div>

            <div className='Wrapper'>

                <nav className={`${menuClass}`}>

                    <NavLink onClick={reset} exact='true' activeclassname='active' className='Home-Link' to='/'>
                        <FontAwesomeIcon icon={faHome} color='#393e46'/>
                        {lang? <p>Home</p> : <p>Inicio</p>}
                    </NavLink>

                    <NavLink onClick={reset} exact='true' activeclassname='active' className='About-Link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#393e46'/>
                        <p>Info</p>
                    </NavLink>

                    <NavLink onClick={reset} exact='true' activeclassname='active' className='Jobs-Link' to='/jobs'>
                        <FontAwesomeIcon icon={faFolderOpen} color='#393e46'/>
                        {lang? <p>Projects</p> : <p>Proyectos</p>}
                    </NavLink>

                    {/*
                    <NavLink onClick={reset} exact='true' activeclassname='active' className='Education-Link' to='/education'>
                        <FontAwesomeIcon icon={faGraduationCap} color='#393e46'/>
                        {lang? <p>Education</p> : <p>Educación</p>}
                    </NavLink>
                    */}
                    <NavLink onClick={reset} exact='true' activeclassname='active' className='Contact-Link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#393e46'/>
                        {lang? <p>Contact</p> : <p>Contacto</p>}
                    </NavLink>

                    <a href='https://github.com/fedemoya1' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a href='https://www.linkedin.com/in/fedemoya/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />                    
                    </a>

                </nav>

                <div className="Burger" onClick={updateMenu}>
                    <div className={BurgerClass}>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NaviBar;