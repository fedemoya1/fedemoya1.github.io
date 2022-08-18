import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.scss'

const NaviBar = () => {

    //-------------------Burger Menu--------------------------
    const [BurgerClass, setBurgerClass] = useState("Burger-Bar Unclicked")
    const [menuClass, setMenuClass] = useState("Hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    
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
    //-------------------End Burger Menu----------------------

    return (
        <div className='Nav-Bar'>

            <Link className='Logo' to='/'>
                <span>&lt;FedeMoya /&gt;</span>
            </Link>

            <div className='Wrapper'>

                <nav className={`Nav ${menuClass}`}>

                    <NavLink exact='true' activeclassname='active' className='Home-Link' to='/'>
                        <FontAwesomeIcon icon={faHome} color='#393e46'/>
                    </NavLink>

                    <NavLink exact='true' activeclassname='active' className='About-Link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#393e46'/>
                    </NavLink>


                    <NavLink exact='true' activeclassname='active' className='Contact-Link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#393e46'/>
                    </NavLink>

                </nav>

                <div className={`External ${menuClass}`}>
                    <a href='https://github.com/fedemoya1' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href='https://www.instagram.com/fedemoya_/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='https://www.linkedin.com/in/fedemoya/' target='_blank' rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />                    </a>
                </div>

                <div className="Burger" onClick={updateMenu}>
                    <div className={BurgerClass}>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default NaviBar;