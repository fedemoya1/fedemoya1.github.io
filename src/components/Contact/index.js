import './index.scss';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//import Loader from 'react-loaders';
import { useSelector } from "react-redux";

const Contact = () => {

    const lang = useSelector((state) => state.lang.value);

    
    const [form, setForm] = useState({
        name:'',
        email:'',
        subjet:'',
        message:''
    })
    
    const handleForm = (e)=>{
        const newForm = {...form}
        newForm[e.target.id] = e.target.value
        setForm(newForm)
    }

    return (
        <>
            <div className='Container Contact'>
                
                <div className='Text-Zone'>

                    <h1>
                        {lang ? 'CONTACT' : 'CONTACTO'}
                    </h1>
                    
                    <p>
                        {lang? 
                        `If you want to reach out, please fill the form.`:
                        `Si deseas contactarme complete el formulario.`
                        }
                    </p>
                </div>
                <div className='Contact-Form'>
                    <form action="https://formsubmit.co/87b94bddf6498e5a3828a54ef32bd9ed" method="POST">
                        <ul>
                            <li>
                                <label htmlFor='name'>{lang? 'Name' : 'Nombre'}</label>
                                <input 
                                    onChange={(e)=>handleForm(e)}
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder={lang? 'Name' : 'Nombre'}
                                    value={form.name}
                                    required
                                />
                            </li>
                            <li>
                                <label htmlFor='email'>Email</label>
                                <input 
                                    onChange={(e)=>handleForm(e)}
                                    type='email'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    value={form.email}
                                    required
                                />
                            </li>
                            <li className='Full'>
                                <label htmlFor='subjet'>{lang? 'Subject' : 'Asunto'}</label>
                                <input 
                                    onChange={(e)=>handleForm(e)}
                                    type='text'
                                    id='subjet'
                                    name='subjet'
                                    placeholder={lang? 'Subject' : 'Asunto'}
                                    value={form.subjet}
                                    required
                                />
                            </li>
                            <li className='Full'>
                                <label htmlFor='message'>{lang? 'Message' : 'Mensaje'}</label>
                                <textarea 
                                    onChange={(e)=>handleForm(e)}
                                    id='message'
                                    name='message'
                                    placeholder={lang? 'Message' : 'Mensaje'}
                                    value={form.message}
                                    required
                                >
                                </textarea>
                            </li>
                            <li className='Full'>
                                <input 
                                    type='submit'
                                    className='Flat-Button'
                                    value={lang? 'SEND' : 'ENVIAR'}
                                />
                            </li>
                        </ul>
                    </form>
                </div>
                <div className='Map'>
                    <MapContainer center={[-34.5875522, -58.3972196]} zoom={16}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[-34.5875522, -58.3972196]}>
                            <Popup>
                                {lang? `I'm currently in Recoleta` : 
                                'Actualmente me encuentro en el barrio de Recoleta'}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            {/*<Loader type='ball-rotate'/>*/}
        </>
    );
}

export default Contact;