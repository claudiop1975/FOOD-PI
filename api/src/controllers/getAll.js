
const url100 = require('../handlers/get100RecipesFromAPI.js');
const { getAllRecipesFromDb } = require('../handlers/getAllRecipesFromDb.js');

const getAllRecipes = async (req, res) => {
    try {
        const recipesFromApi = await url100();
        const recipesFromDb = await getAllRecipesFromDb();
                
        if (recipesFromApi.length) {
            if (recipesFromDb!==undefined) {const recipes = recipesFromDb.concat(recipesFromApi);
                res.status(200).send(recipes);} 
            else {res.status(200).send(recipesFromApi);}} 
        else{
            if (recipesFromDb!==undefined) {res.status(200).send(recipesFromDb);} 
            else {res.status(404).send({message:'No se encontraron recetas'});}}
    } 
    catch (error) {
        res.status(404).send({message:'ERROR INESPERADO DEL SERVIDOR'});}
}

module.exports = {
    getAllRecipes
}