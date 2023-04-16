//*importar los handlers getRecipeByIdFromAPI y getRecipeByIdFromDb, y crear una función que reciba el id, SI EL ID ES NUMERICO, LLAMARÁ A LA FUNCION getRecipeByIdFromAPI, SI EL ID ES ALFANUMERICO, LLAMARÁ A LA FUNCION getRecipeByIdFromDb. SI NO EXISTE LA RECETA, DEVOLVERÁ UN ERROR.
const { getRecipeByIdFromAPI } = require('../handlers/getRecipeByIdFromAPI.js');
const { getRecipeByIdFromDb } = require('../handlers/getRecipeByIdFromDb.js');

const getById = async (req, res) => {
    const { idRecipe } = req.params;
    let recipe;

    if (isNaN(idRecipe)) {
        recipe = await getRecipeByIdFromDb(idRecipe);
        // console.log(recipe);//*BORRAR
        if (recipe) {
            res.status(201).send(recipe);
        } else {
            res.status(404).json({ message: 'DB Recipe not found' })
        }
    }
    else {
        recipe = await getRecipeByIdFromAPI(idRecipe);
        if (recipe.id) {
            res.status(201).send(recipe);
        } else {
            res.status(404).json({ message: 'API Recipe not found' })
        }
    }


}


module.exports = {getById}