require('dotenv').config();
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
// const { sequelize } = require('sequelize');
const {Diets} = require('../models/Diets.js');

//* Buscar en la base de datos, el id de la receta que se le pasa por parámetro, y devolver el objeto de esa receta.



const getRecipeByIdFromDb = async (idRecipe) => {
    
    try {
        const recipe = await Diets.findByPk(idRecipe);
        return recipe;
        
    } catch (err) {
        return null;
    }
}

module.exports= {
    getRecipeByIdFromDb
};