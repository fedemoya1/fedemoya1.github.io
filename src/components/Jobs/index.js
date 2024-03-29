import './index.scss';
//import Loader from 'react-loaders';
import projects from "../Projects/index"
import { useSelector } from "react-redux";

const Jobs = () => {
    
    const lang = useSelector((state) => state.lang.value);
    const project = projects.map(obj =>{
        return(
            <div key={obj.id} className="cards">
                {/*<a href={obj.link} target='_blank' rel="noreferrer">
                </a>*/}
                <img src={obj.image} alt={obj.alternative}/>
                <div className="btns">
                    <a href={obj.link} target='_blank' rel="noreferrer" className="btn demo">
                        Demo
                    </a>
                    <a href={obj.repository} target='_blank' rel="noreferrer" className="btn github">
                        Github
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