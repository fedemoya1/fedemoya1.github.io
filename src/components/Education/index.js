import './index.scss';
//import Loader from 'react-loaders';
import { useSelector } from "react-redux";

const Education = () => {
    
    const lang = useSelector((state) => state.lang.value);

    return(
        <>
            Hola
        </>
    )
}

export default Education;