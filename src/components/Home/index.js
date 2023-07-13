import { Link } from 'react-router-dom'
import Fede from '../../assets/imagenes/fede.jpeg'
//import Loader from 'react-loaders'
import { useSelector } from "react-redux";
import './index.scss'

const Home = () => {

    const lang = useSelector((state) => state.lang.value);

    return (
        <>
            <div className='Container Home-Page'>
                <img src={Fede} alt='Developer'/>
                
                <div className='Text-Zone'>
                    {lang ?
                        <h1>
                            Hi,<br/>
                            I'm <span>Fede Moya</span><br/>
                        </h1> :
                        <h1>
                            Hola,<br/>
                            Soy <span>Fede Moya</span><br/>
                        </h1>
                    }

                    <p>
                        Frontend Developer <span>&#40;React&#41;</span>
                    </p>
                    <Link to='/contact' className='Contact-Button'>
                        {lang? 'Contact me': 'Contáctame'}
                    </Link>
                </div>

            </div>
            {/*<Loader type='ball-rotate'/>*/}
        </>
    );
}

export default Home;