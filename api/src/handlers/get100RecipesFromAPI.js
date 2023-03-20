require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

const url100 = async () => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)

        const recipes = data.results;

        const allRecipes = recipes.map(recipe => {
            const recipeSteps = recipe.analyzedInstructions[0]?.steps.map(step => step.step);
            const diets = recipe.diets.map(el => el );
                return {
                    id: recipe.id,
                    name: recipe.title,
                    image: recipe.image,
                    recipeSummary: recipe.summary,
                    healthScore: recipe.healthScore,
                    diets: diets,
                    stepByStep: recipeSteps,
                    origin: "External API"

                }
        })
        // console.log(allRecipes);
        
        return allRecipes;
    } catch (err) {
        // console.log(err.message + ' "Error en la ruta /recipes" ');
        return err;
    }
};
// url100();

module.exports = url100;






