import React from "react";
// import DetailedCardRecipe from "../DetailedCardRecipe/DetailedCardRecipe";
import {Link} from 'react-router-dom';
import "./SimpleCardRecipe.css";



const SimpleCardRecipe = ({ recipe }) => {
    // console.log(recipe.diets);
    //*ESTE COMPOENTE DEBE TENER UNA FUNCIÓN handleClick QUE TOME EL idRecipe DE LA RECETA
    //*Y PASAR ESE ID AL COMPONENTE DetailedCardRecipe PARA QUE MUESTRE LA RECETA CON ESE ID
    //*Y TODOS LOS ATRIBUTOS DE LA RECETA CON ESE ID.
    const idRecipe = recipe.id;
    
    return (
        <div className="cardSimple">
            <div style={{width:"309px", height:"222px"}}>
                <Link to={`/detail/${idRecipe}`}>
                    <img style={{width:"309px", height:"222px",borderRadius:"4%"}}src={recipe.image} alt={recipe.name} />
                </Link>
            </div>
            <div className="cardContent">
                <h2 style={{color: "darkkhaki", margin:"auto"}}>{recipe.name}</h2>
                <hr style={{margin:"0px"}}></hr>
                <h3 style={{color: "darkkhaki", textDecorationLine:"underline", margin:"auto"}}>Diets Types</h3>
                
                <div className="p">
                    <ul style={{padding:"0px", margin:"0px"}}>
                    {recipe.diets?.map((diet) => (
                            <li className="ul__li" key={diet} style={{color: "darkkhaki", display:"inline-flex", flexDirection:"row", margin:"0em", padding:"4px"}}>{diet}, </li>
                            ))}                
                    </ul>
                </div>
            </div>
    </div>
    );
};
export default SimpleCardRecipe;