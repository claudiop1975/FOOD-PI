import React from "react";
//*el componente navbar debe renderizar un título y un link a la ruta /home y el componenete la barra de busqueda
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
    return (
        <div className="navbar">
        <h1 className="h1Title">RECIPES APP - By Claudio Parache</h1>
        <h2 className="h2Title">Recipes Book</h2>
        <Link to="/home">
            <Button text="Home Page" handleClick={null}/>
        </Link>
        <SearchForm />
        </div>
    );
    }
export default Navbar;

