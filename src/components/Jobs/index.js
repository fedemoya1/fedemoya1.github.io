import './index.scss';
//import Loader from 'react-loaders';
import projects from "../Projects/index"
import { useSelector } from "react-redux";

const Jobs = () => {
    
    const lang = useSelector((state) => state.lang.value);
    const project = projects.map(obj =>{
        return(
            <div key={obj.id} className="cards">
                <a href={obj.link} target='_blank' rel="noreferrer">
                    <img src={obj.image} alt={obj.alternative}/>
                </a>
                <div className="btns">
                    <a href={obj.link} target='_blank' rel="noreferrer">
                        <div className="btn demo">
                            Demo
                        </div>
                    </a>
                    <a href={obj.repository} target='_blank' rel="noreferrer">
                        <div className="btn github">
                            Github
                        </div>
                    </a>
                </div>
            </div>
        )
    })

    return(
        <div className="Container Job-Page">
            <h1>
                {lang ? "Projects" : "Proyectos"}
            </h1>
            <p>
                {lang ? "This are some of the proyects that I've made": "Estos son algunos proyectos que he hecho"}
            </p>
            <div className="Proyects-Container">
                {project}
            </div>
        </div>
    )
}

export default Jobs;