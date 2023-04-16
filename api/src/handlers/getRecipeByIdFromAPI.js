
require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
// const {dataFake} = require('./dataFake.js');


const getRecipeByIdFromAPI = async (idRecipe) => {
    // let idRecipe = 782585;
    // console.log(process.env)
    try {
        const { data } = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?apiKey=${API_KEY}`)
        // const data = dataFake;
        // console.log(data);
        const pasos = data.analyzedInstructions[0]?.steps
        const pasos2= pasos.map(el => el.step) 
        let Recipe= { 
            id: data.id, 
            name: data.title,
            image:data.image,
            recipeSummary:data.summary,
            healthScore: data.healthScore,
            diets: data.diets.map(el => el),
            stepByStep: pasos2,
            
        }
        // console.log(Recipe);
        return Recipe;
    } catch (err) {
        // console.log(err.message + ' ' + 'ERROR EN LA SOLICITUD, CÓDIGO DE ERROR ' +err.response.status)
        return err;
    }
    
};
// console.log('Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta. La receta es recibida por parámetro (ID). Tiene que incluir los datos de los tipos de dietas asociados a la receta. Debe funcionar tanto para las recetas de la API como para las de la base de datos. ESTA FUNCIÓN LLAMARÁ A UNA FUNCION (CONTROLADOR) QUE TRAIGA LOS DATOS DE LA API EXT. SINO LLAMARÁ A UNA FUNCIÓN (CONTROLADOR) QUE TRAIGA LOS DATOS DE LA BASE DE DATOS')

//getRecipeByIdFromAPI();

module.exports = {
    getRecipeByIdFromAPI
}