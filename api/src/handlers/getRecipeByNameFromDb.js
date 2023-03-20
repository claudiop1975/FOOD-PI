//*Importar las dependencias necesarias, y realizar una función que busque el nombre que viene por query dentro de los registros de la base de datos, y devuelva el resultado de la búsqueda. Si encuentra el nombre en la base de datos, devolverá el objeto de esa receta. Si no encuentra el nombre en la base de datos, devolverá un mensaje de error.
const { Recipe } = require('../db.js');


const getRecipeByNameFromDb = async (name) => {
        
        try {
            const recipe = await Recipe.findAll({
                where: {
                    name: name
                }
            });
            return recipe;
            
        } catch (err) {
            return null;
        }
}

module.exports = {
    getRecipeByNameFromDb
}