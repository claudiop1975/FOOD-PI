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
    useEffect(() => {
        dispatch(getRecipesById(idRecipe))
    }, [dispatch, idRecipe])

    useEffect(() => {
        setRecipe(recipeRedux)
    }, [recipeRedux]);


    return (
        
        recipe ?
            
                <div className="detailedCard">
                    <BackButton />
                    <p style={{ color: " khaki" }}>Id Recipe: {recipeRedux.id}</p>
                    <h1 style={{ color: " khaki" }}>{recipeRedux.name}</h1>
                    <div>
                        <img src={recipeRedux.image} alt={recipeRedux.name} style={{width:"20em", height:"20em", border: "inset 0.5rem", color: "chartreuse", "border-radius": "15rem" }} />
                    </div>
                    <div className="card__content">
                        <p style={{ color: " khaki" }}>Sumary: {recipeRedux.recipeSummary}</p>
                        <hr />
                        <p style={{ color: " khaki" }}>Health Score: {recipeRedux.healthScore}</p>
                        <ol style={{ color: " khaki" }}>{recipeRedux.stepByStep?.map((step)=>(
                            <li key={step}>{step}</li>
                        ))}</ol>
                        <p style={{ color: "greenyellow" }}>Diets Types: {recipeRedux.diets?.map((diet) => (
                            <span key={diet}>{diet}, </span>
                        ))}</p>
                    </div>
                    <BackButton />
                </div>
                : <Joker message={"Recipe not found"} image={"./img05tost.png"} />
            
    );
}

export default DetailedCardRecipe;
