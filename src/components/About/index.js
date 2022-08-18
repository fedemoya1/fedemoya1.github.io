import './index.scss';
import Skills from '../Skills/index'
import Loader from 'react-loaders'

const About = () => {
    
    const images = Skills.map((skill) =>{
        
        return(
        <img
            key={skill.id} 
            src={skill.image} 
            alt={skill.alternative}
            className={`_${skill.id}`}
        />
        )
    }
    )

    return (
        <>
            <div className='Container About-Me'>
                <h1 className='Text-Zone'>
                    SOBRE MI
                </h1>
                <section className='Bio'>
                    <p>¡Hola visitante! Me llamo Felix Moya
                        y soy un Frontend Developer Jr. 
                        Con residencia en CABA, Argentina.
                    </p>
                    <p>
                        Soy un apasionado de la tecnología, 
                        de las matemáticas, física, programación,
                        y de los videojuegos.
                    </p>
                    <p className='Double-Text'>
                        Actualmente estoy en mi 3er año de 
                        Ingeniería electrónica y a la par me 
                        sigo capacitando en temas de programación
                        orientado al desarrollo web. Algunos de 
                        los lenguajes y herramientas que domino son:
                    </p>
                </section>
                <section className='Skills'>
                    {images}
                </section>
            </div>
            <Loader type='ball-rotate'/>
        </>
    );
}

export default About;