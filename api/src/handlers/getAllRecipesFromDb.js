//*ESTE HANDLER ME TRAERÁ TODAS LAS RECETAS DE LA BASE DE DATOS INCLUYENDO SUS DIETAS DE LA BASE DE DATO RELACIONADA, Y LAS RETORNARA EN UNA LISTA.
const { Recipe, Diets } = require ('../db.js');
//* idRecipe | name | image | recipeSummary | healthScore | stepByStep

async function getAllRecipesFromDb() {
    try {
        const recipes = await Recipe.findAll({include: Diets});
        // console.log(recipes);//*BORRAR
        if (recipes.length) {
            let data2 = recipes.map(recipe => {//*dataValues??
                return {
                    idRecipe: recipe.idRecipe,
                    name: recipe.name,
                    image: recipe.image,
                    healthScore: recipe.healthScore,
                    recipeSummary: recipe.recipeSummary,
                    stepByStep: recipe.stepByStep,//*ahora es un array!
                    diets: recipe.diets.map(diet => diet.name)//*diets o Diets(mapeado afuera)?
                }
            })
        return data2;
        }
        
    } catch (error) {
        throw Error(error);        
    }
}

module.exports = {
    getAllRecipesFromDb
};

// {

//     // model: Diets,
//     // attributes: ['name'],
//     // through: {
//     //     Recipe_Diets: ['name', 'idDiets', 'idRecipe'],
//     // },
// },