//*importar los handlers getRecipeByIdFromAPI y getRecipeByIdFromDb, y crear una función que reciba el id por params, y busque en los dos handlers, y devuelva el resultado de la búsqueda. Si encuentra el id en la base de datos, devolverá el objeto de esa receta. Si no encuentra el id en la base de datos, devolverá un mensaje de error. y buscará en la API externa, y devolverá el objeto de esa receta. Si no encuentra el id en la API externa, devolverá un mensaje de error.
const { getRecipeByIdFromAPI } = require('../handlers/getRecipeByIdFromAPI.js');
const { getRecipeByIdFromDb } = require('../handlers/getRecipeByIdFromDb.js');

const getById = async (req, res) => {
    const { idRecipe } = req.params;
    try {
        
        const recipe = await getRecipeByIdFromDb(idRecipe);
        if (recipe !== null){
            res.status(200).send(recipe);
        } else {
            const recipeapi = await getRecipeByIdFromAPI(idRecipe);
            res.status(200).send(recipeapi);
        }
        
    } catch (error) {
        res.status(404).send({error: 'Recipe not found'});        
    }

}


module.exports = {getById}