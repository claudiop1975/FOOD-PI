const { Recipe, Diets } = require('../db.js');

const postRecipesToDb = async (name, image, recipeSummary, healthScore, stepByStep, diets) => {
    try {
        const recipe = await Recipe.create({
            name,
            image,
            recipeSummary,
            healthScore,
            stepByStep,
            diets,
            origin: "Data Base"
        })
        diets.foreach(async diet => {
            const dietFound = await Diets.findOne({
                where: {
                    name: diet
                }
            })
            await recipe.addDiets(dietFound)
        })
        return recipe;
    }catch(err){
        return err;
    }
};

module.exports = {
    postRecipesToDb
};