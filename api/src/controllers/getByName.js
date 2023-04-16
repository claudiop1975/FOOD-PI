// const  {getAllRecipes} = require('../controllers/getAll.js');
const url100 = require('../handlers/get100RecipesFromAPI.js');
const { getAllRecipesFromDb } = require('../handlers/getAllRecipesFromDb.js');


const getByName = async (req, res) => {
    
    const { name } = req.query;
    
    try {
        const recipesFromApi = await url100();
        const recipesFromDb = await getAllRecipesFromDb();
        const AllRecipes = recipesFromApi.concat(recipesFromDb);
        const recipesByName = AllRecipes.filter((recipe) => recipe.name.toLowerCase().includes(name.toLowerCase()));
        res.status(200).send(recipesByName);

    }
    catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { getByName };