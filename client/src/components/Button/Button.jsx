//* ESTE COMPONENTE RENDERIZARA UN BOTON CUYO TEXT, Y FUNCIONALIDAD SERA PASADA POR PROPS.
import React from 'react'
import './Button.css'

const Button = ({text, handleClick}) => {
    return (
        <button className="buttonX" onClick={handleClick}>{text}</button>
    )
};

export default Button;