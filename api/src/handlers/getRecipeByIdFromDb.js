require('dotenv').config();
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
// const { sequelize } = require('sequelize');
const {Recipe, Diets} = require('../db.js');

//* Buscar en la base de datos, el id de la receta que se le pasa por parámetro, y devolver el objeto de esa receta.



const getRecipeByIdFromDb = async (idRecipe) => {
    try {
        const recipedb= await Recipe.findOne({include:Diets});
        if (recipedb) {
            let data = {
                idRecipe: recipedb.idRecipe,
                name: recipedb.name,
                image: recipedb.image,
                recipeSummary: recipedb.recipeSummary,
                healthScore: recipedb.healthScore,
                stepByStep: recipedb.stepByStep,
                diets: recipedb.diets.map(diet => diet)
            }
            return data;
        }
        throw Error('Recipe not found');
        
    } catch (error) {
        throw error.message;        
    }
    
}

module.exports= {
    getRecipeByIdFromDb
};