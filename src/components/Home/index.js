import { Link } from 'react-router-dom'
import Fede from '../../assets/imagenes/fede.jpeg'
import countryApp from "../../assets/imagenes/country-app.png"
import todoApp from "../../assets/imagenes/todo-app.png"
//import Loader from 'react-loaders'
import { useSelector } from "react-redux";
import './index.scss'
import skills from "../Skills/index"

const Home = () => {

    const lang = useSelector((state) => state.lang.value);

    const habilities = skills.map(skill=>{
        return(
            <div 
                key={skill.id}
                className="Carousel-Card"
            >
                <img 
                    src={skill.image}
                    alt={skill.alternative}    
                />
            </div>
        )
    })

    return (
        <>
            <div className='Container Home-Page'>
                <div className="Hero">

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
                <h3>{lang ? "Skills" : "Habilidades"}</h3>
                <div className="Carousel-Container">
                    <div className="Carousel-Track">
                       {habilities}
                       {habilities}
                   </div>
               </div>
               <h3>{lang ? "Projects" : "Proyectos"}</h3>
               <div className="Projects-Wrapper">
                    <div className="Project-Card">
                        <img src={countryApp} alt="Basic Country info App" className='Images'/>
                        <div className="Info">
                            <h2>Country App</h2>
                            <p>
                                {/*lang ? "This app shows basic information about every country in the world." : "Esta app muestra información básica de todos los países del mundo."*/}
                            </p>
                            <a href="https://country-react-app-fede.netlify.app/" className='Contact-Button' target='_blank' rel="noreferrer">
                                Demo
                            </a>
                        </div>
                    </div>
                    <div className="Project-Card">
                        <img src={todoApp} alt="Todo App" className='Images'/>
                        <div className="Info">
                            <h2>Todo App</h2>
                            <p>
                                {/*lang ? "This app allows you to add and clear chores from a todo list." : "Esta app te permite agregar o eliminar objetivos de una lista de tareas."*/}
                            </p>
                            <a href='https://todo-app-fedemoya.netlify.app/' className='Contact-Button' target='_blank' rel="noreferrer">
                                Demo
                            </a>
                        </div>
                    </div>
               </div>
                <Link to='/jobs' className='Contact-Button'>
                    {lang? 'More': 'Ver Más'}
                </Link>
            </div>
            {/*<Loader type='ball-rotate'/>*/}
        </>
    );
}

export default Home;