require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
// const {dataFake} = require('./dataFake.js');

// console.log(process.env);

const url100 = async () => {
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const recipes = data.results;
        // const recipes = dataFake.results;


        const allRecipes = recipes.map(recipe => {
            const recipeSteps = recipe.analyzedInstructions[0]?.steps.map(step => step.step);
            const diets = recipe.diets.map(el => el);
            return {
                idRecipe: recipe.id,
                name: recipe.title,
                image: recipe.image,
                recipeSummary: recipe.summary,
                healthScore: recipe.healthScore,
                stepByStep: recipeSteps,
                diets: diets,
            };
        });
        // console.log(allRecipes);
        return allRecipes;
    } catch (err) {
        // console.log(err.message + ' "Error en la ruta /recipes" ');
        throw err;
    }
}
// url100();

module.exports = url100;






