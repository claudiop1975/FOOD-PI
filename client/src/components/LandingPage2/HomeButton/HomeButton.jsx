import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const ButtonHome = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    /* border: 2px solid #fff; */
    background: transparent;
    color: #a29a9a5b;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 2rem;
    
    &:hover {
        background-color: #22ff0136;
        color: #000;
    }
`
//*ESTE BOTON DEBE REDIRECIONARME A LA RUTA /HOME

const HomeButton = () => {
    
    return (
        
        <Link to ="/home">
                    <ButtonHome >Skip & Enter</ButtonHome>
        </Link>
    );
}

export default HomeButton;
