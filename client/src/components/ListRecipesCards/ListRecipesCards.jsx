import React, { useEffect } from "react";
// import { useEffect } from "react";
import SimpleCardRecipe from "../SimpleCardRecipe/SimpleCardRecipe";
import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./ListRecipesCards.module.css";
import Button from "../Button/Button";
import LoadingFn from "../Loading/Loading";


const ListRecipesCards = () => {
    
    const cards = useSelector((state) => state.recipes100);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);
    const [currentRecipes, setCurrentRecipes] = useState([]);
    useEffect(() => {
        //*CALCULO EL INDICE DEL ULTIMO ELEMENTO DE LA PAGINA ACTUAL
        const indexOfLastRecipe = currentPage * recipesPerPage; 
        //*CALCULO EL INDICE DEL PRIMER ELEMENTO DE LA PAGINA ACTUAL
        const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; 
        //*TOMO LOS ELEMENTOS DEL ARRAY DE RECETAS QUE CORRESPONDEN A LA PAGINA ACTUAL
        const currentRecipes = cards.slice(indexOfFirstRecipe, indexOfLastRecipe);
        setCurrentRecipes(currentRecipes);
    }, [cards, currentPage, recipesPerPage]);


    // //*CALCULO EL INDICE DEL ULTIMO ELEMENTO DE LA PAGINA ACTUAL
    // const indexOfLastRecipe = currentPage * recipesPerPage; 
    // //*CALCULO EL INDICE DEL PRIMER ELEMENTO DE LA PAGINA ACTUAL
    // const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage; 
    // //*TOMO LOS ELEMENTOS DEL ARRAY DE RECETAS QUE CORRESPONDEN A LA PAGINA ACTUAL
    // const currentRecipes = cards.slice(indexOfFirstRecipe, indexOfLastRecipe);
    
    //*FUNCION PARA PASAR A LA SIGUIENTE PAGINA
    const nextPage = () => {setCurrentPage(currentPage + 1);};
    //*FUNCION PARA PASAR A LA PAGINA ANTERIOR
    const prevPage = () => {setCurrentPage(currentPage - 1);};
    //*FUNCION PARA MOSTRAR EL NUMERO DE PAGINA ACTUAL
    const indexOfCurrentPage = () => {return currentPage;};

    return (
        <>
        <div>
        <Button text="Prev" handleClick={prevPage}/>
        <Button text={indexOfCurrentPage()} handleClick={null}/>            
        <Button text="Next" handleClick={nextPage}/>            
        </div>
        <hr/>
        <div className={styles.list__cards}>
            {currentRecipes.length? currentRecipes.map((recipe, key) => 
                <SimpleCardRecipe key={key} recipe={recipe} />
            ): LoadingFn()}
        </div>
            <div style={{alignContent:"center"}}>                
            <Button text="Prev" handleClick={prevPage}/>
            <Button text={indexOfCurrentPage()} handleClick={null}/>            
            <Button text="Next" handleClick={nextPage}/>
            </div>
        
        </>
    )
};
export default ListRecipesCards;


