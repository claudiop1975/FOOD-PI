require('dotenv').config();
const axios = require('axios');
// const { API_KEY } = process.env;
const  url100  = require('./get100RecipesFromAPI.js');


const getRecipeByNameFromAPI = async (name) => {
    // let name = "chicken";
    // console.log("recipes");
    try {
        const recipes = await url100();
        //iterar sobre el array recipes, y buscar en su propiedad name, si el valor de name es igual al valor de name que viene por query
        //si encuentra el valor pushear todo el objeto {id, name, image, recipeSummary, healthScore, diets, stepByStep, y origin } en un nuevo array llamato results y devolverlo.
        let results = [];
        recipes.forEach(el => {
            if(el.name.toLowerCase().includes(name.toLowerCase())){
                results.push({},{id: el.id, name: el.name, image: el.image, recipeSummary: el.recipeSummary, healthScore: el.healthScore, diets: el.diets, stepByStep: el.stepByStep, origin: el.origin})
            }
        })
        // console.log(results);
        return results;
    } catch (err) {
        // console.log(err.message + ' ' + 'ERROR EN LA SOLICITUD, CÓDIGO DE ERROR 404')
        return err;
    }
};
// console.log('Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta. La receta es recibida por parámetro (ID). Tiene que incluir los datos de los tipos de dietas asociados a la receta. Debe funcionar tanto para las recetas de la API como para las de la base de datos. ESTA FUNCIÓN LLAMARÁ A UNA FUNCION (CONTROLADOR) QUE TRAIGA LOS DATOS DE LA API EXT. SINO LLAMARÁ A UNA FUNCIÓN (CONTROLADOR) QUE TRAIGA LOS DATOS DE LA BASE DE DATOS')
// getRecipeByNameFromAPI();
module.exports = {
    getRecipeByNameFromAPI
}