import { Link } from 'react-router-dom'
import Fede from '../../assets/imagenes/fede.jpeg'
import Loader from 'react-loaders'
import './index.scss'

const Home = () => {
    return (
        <>
            <div className='Container Home-Page'>
                <img src={Fede} alt='Developer'/>
                
                <div className='Text-Zone'>
                    <h1>
                        Fede Moya 
                    </h1>
                    <h2>
                        Frontend Developer
                    </h2>
                    <Link to='/contact' className='Contact-Button'>
                        Contáctame
                    </Link>
                </div>

            </div>
            <Loader type='ball-rotate'/>
        </>
    );
}

export default Home;