import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRecipes100 } from "../../redux/actions";
import { getDiets } from "../../redux/actions";
import ListRecipesCards from "../ListRecipesCards/ListRecipesCards";
import Filters from "../filters/filters";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
    //*AL CARGARSE ESTE COMPONENTE DEBERÁ DESPACHAR LA ACCION GET_RECIPES_100 Y GET_DIETS Y CARGARLOS AL ESTADO CORRESPONDIENTE DE REDUX.

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipes100());        
        dispatch(getDiets());
    }, [dispatch]);
    
    
    return (
    <div className="home">
        <Navbar/>
        <Link to="/post"><Button text="Create your owen recipe " handleClick={null}/></Link>        
        <Filters/>
        <ListRecipesCards/>
    </div>
    )
}
export default HomePage
