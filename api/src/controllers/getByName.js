const { getRecipeByNameFromAPI } = require('../handlers/getRecipeByNameFromAPI.js');
const { getRecipeByNameFromDb } = require('../handlers/getRecipeByNameFromDb.js');


const getByName = async (req, res) => {
    const { name } = req.query;
    const queryRecipes = [];
    try {
        if (name) {
            const recipesFromAPI = await getRecipeByNameFromAPI(name);
            const recipesFromDb = await getRecipeByNameFromDb(name);
            if (recipesFromAPI.length) {
                queryRecipes.push(...recipesFromAPI);
            }
            if (recipesFromDb.length) {
                queryRecipes.push(...recipesFromDb);
            }
            if (queryRecipes.length) {
                return res.status(200).json(queryRecipes);
            }
            
        }
    } catch (err) {
        return res.status(404).json({ message: 'No se encontró ninguna receta con ese nombre' });
    }

};

module.exports = { getByName };