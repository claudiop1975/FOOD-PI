import React from "react";
import './DetailedCardRecipe.css'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesById } from "../../redux/actions";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Joker from "../Joker/Joker";
import BackButton from "../BackButton/BackButton";


const DetailedCardRecipe = () => {
    const [recipe, setRecipe] = useState({});
    const { idRecipe } = useParams();
    const dispatch = useDispatch();
    const recipeRedux = useSelector((state) => state.recipeDetail);
    useEffect(() => {dispatch(getRecipesById(idRecipe))}, 
    [dispatch, idRecipe])

    useEffect(() => {setRecipe(recipeRedux)}, 
    [recipeRedux]);


    return (

        recipe ?

            <div className="detailedCard">
                <BackButton />
                <p style={{ color: " khaki" }}>Id Recipe: {recipe.idRecipe}</p>
                <h1 style={{ color: " khaki" }}>{recipe.name}</h1>
                <div>
                    <img src={recipe.image} alt={recipe.name} style={{ border: "inset 0.5rem", color: "chartreuse", "border-radius": "15rem" }} />
                </div>
                <div className="card__content">
                    <p style={{ color: " khaki" }}>Sumary: {recipe.recipeSummary}</p>
                    <hr />
                    <p style={{ color: " khaki" }}>Health Score: {recipe.healthScore}</p>
                    <p style={{ color: " khaki" }}>{recipe.stepByStep}</p>
                    <p style={{ color: "greenyellow" }}>Diets Types: {recipe.diets?.map((diet) => (
                        <span key={diet}>{diet}, </span>
                    ))}</p>
                </div>
                <BackButton />
            </div>
            : <Joker message={"Recipe not found"} image={"./img05tost.png"} />

    );
}

export default DetailedCardRecipe;
