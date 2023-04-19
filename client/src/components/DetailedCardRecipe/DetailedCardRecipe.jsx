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
    
    //* const summaryHtml = document.getElementById("summary");
    const summary = recipeRedux.recipeSummary;

    return (
        
        recipe ?
            
                <div className="detailedCard">
                    <BackButton />
                    <p style={{ color: " khaki" }}>Id Recipe: {recipeRedux.id}</p>
                    <h1 style={{ color: " khaki" }}>{recipeRedux.name}</h1>
                    <div>
                        <img src={recipeRedux.image} alt={recipeRedux.name} style={{width:"15em", height:"15em", border: "inset 0.5rem", color: "chartreuse", "border-radius": "15rem" }} />
                    </div>
                    <div className="card__content">
                        <h3 style={{ color: " khaki", textDecoration:"underline" }}>Recipe Summary</h3>
                        <div id="summary" dangerouslySetInnerHTML={{ __html: summary }} style={{ color: " khaki" }}></div>
                        {/* <p style={{ color: " khaki" }}>Recipe Summary: {recipeRedux.recipeSummary}</p> */}
                        {/* <div id="summary" style={{ color: " khaki" }}>Recipe Summary: {summaryHtml.innerHTML=summary}</div> */}
                        <hr />
                        <p style={{ color: " khaki" }}>Health Score: {recipeRedux.healthScore}</p>
                        <hr />
                        <h3 style={{ color: " khaki", textDecoration:"underline" }}>Step by Step</h3>
                        <ol style={{ color: " khaki" }}>{recipeRedux.stepByStep?.map((step)=>(
                            <li style={{textAlign: "initial"}} key={step}> - {step}</li>
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
