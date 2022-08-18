import './index.scss';
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'gmail',
            'template_ar1n1ki',
            form.current,
            'Z8mP4ZGSbL58IZTbw'
            ).then(
                () => {
                    alert('¡Mensaje enviado!')
                    window.location.reload(false)
                },
                () => {
                    alert('No se pudo enviar el formulario')
                }
            )
    }

    return (
        <>
            <div className='Container Contact'>
                
                <div className='Text-Zone'>

                    <h1>
                        CONTACTO
                    </h1>
                    
                    <p>
                        Si quieres tener tu propia 
                        página web o darle 
                        mantenimiento a la que ya tienes, 
                        no dudes en contactarme. También estoy 
                        abierto a escuchar propuestas fulltime o cualquier
                        otro tipo de consultas.
                    </p>
                </div>
                <div className='Contact-Form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li>
                                <input 
                                    type='text'
                                    name='name'
                                    placeholder='Nombre'
                                    required
                                />
                            </li>
                            <li>
                                <input 
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    required
                                />
                            </li>
                            <li className='Full'>
                                <input 
                                    type='text'
                                    name='subjet'
                                    placeholder='Asunto'
                                    required
                                />
                            </li>
                            <li className='Full'>
                                <textarea 
                                    name='message'
                                    placeholder='Mensaje'
                                    required
                                >
                                </textarea>
                            </li>
                            <li className='Full'>
                                <input 
                                    type='submit'
                                    className='Flat-Button'
                                    value='ENVIAR'
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
                                Actualmente me encuentro en el barrio de Recoleta
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='ball-rotate'/>
        </>
    );
}

export default Contact;