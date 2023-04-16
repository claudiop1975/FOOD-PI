import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';


//* Se debe desarrollar una aplicación utilizando React y Redux que contenga las siguientes vistas:
//* LANDING PAGE | deberás crear una página de inicio o bienvenida con:
//* Alguna imagen de fondo representativa al proyecto.
//* Botón para ingresar a la home page.

const LandingPage = () => {
    return (
        <div className="backimg__container">
            <iframe src="https://giphy.com/embed/ptLvsQr06Hzb2crcVA" width="100%" height="100%" style="position:absolute" frameBorder= '0' class="giphy-embed" allowFullScreen></iframe>
            <div className="landingPage">
                <div className="landingPage__container">
                
                    <h1 className="landingPage__title">Welcome to the Food App</h1>
                    <p className="landingPage__text">Here you can find the best recipes ever!</p>
                    <Link to="/home">
                        <button className="landingPage__button">Enter</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage