import './index.scss';
import Skills from '../Skills/index';
//import Loader from 'react-loaders';
import { useSelector } from "react-redux";

const About = () => {

    const lang = useSelector((state) => state.lang.value);
    
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
                    {lang? 'ABOUT ME' : 'SOBRE MI'}
                </h1>
                <section className='Bio'>
                    <p>
                        {lang ? 
                        `Hello dear visitor! My name is Federico Moya. I'm a frontend 
                        developer with domain of the ReactJS library. Currently living in Buenos Aires, Argentina`:
                        `¡Hola visitante! Me llamo Federico Moya.
                        Soy un Desarrollador Frontend con dominio de
                        la librería de ReactJS. 
                        Residiendo en CABA, Argentina.`
                        }
                        
                    </p>
                    <p>
                        {/*lang ? 
                        `I am passionate about technology
                        mathematics, physics, programming,
                        video games and sports. I consider that
                        learning to program is fundamental in almost
                        any profession since it helps us to carry out
                        calculations easier and to develop a logical thinking.`:
                        `Soy un apasionado de la tecnología, 
                        de las matemáticas, la física, la programación,
                        de los videojuegos y el deporte. Considero que
                        aprender a programar es fundamental en casi
                        cualquier profesión ya que nos ayuda a realizar
                        cálculos más fácil y a desarrollar un pensamiento
                        lógico.`
                    */}
                    </p>
                    {/*<p className='Double-Text'>
                    */}
                    <p>
                        {lang? 
                        `Currently in my 4th year of
                        Electronic Engineering at the Argentina Bussiness 
                        School (UADE). I chose React as the
                        library in which I wanted to specialize because
                        it has a friendly syntax and also helps
                        to split a page into components, making
                        easier to maintain, scale, and reuse.
                        Some of the languages and tools that I master are:`:
                        `Actualmente cursando mi 4to año de 
                        Ingeniería Electrónica en la Universidad 
                        Argentina de la Empresa (UADE). Elegí React como la
                        librería en la que me quise especializar porque 
                        tiene una sintaxis amigable y, además, ayuda 
                        a dividir una página en componentes, haciendo que 
                        sean más fáciles de mantener, escalar y reutilizar.
                        Algunos de los lenguajes y herramientas que domino son:`
                        }
                        
                    </p>
                </section>
                <section className='Skills'>
                    {images}
                </section>
            </div>
            {/*<Loader type='ball-rotate'/>*/}
        </>
    );
}

export default About;