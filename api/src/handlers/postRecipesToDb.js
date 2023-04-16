const { Recipe, Diets } = require('../db.js');

const postRecipesToDb = async ({name, image, recipeSummary, healthScore, stepByStep}, diets) => {
   
    try {
        const recipe = await Recipe.create({
            name,
            image,
            recipeSummary,
            healthScore,
            stepByStep,        
        })
       


        
        diets.map(async diet => {
            const dietFound = await Diets.findByPk(diet)
            await recipe.addDiets(dietFound)
            
            })
        
        return {...recipe.dataValues, diets}
        
    }catch(err){
        return err;
        // console.log(err);//*BORRAR
    }
};

module.exports = {
    postRecipesToDb
};