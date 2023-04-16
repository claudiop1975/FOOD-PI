// const { sequelize } = require('sequelize');
const url100 = require('./get100RecipesFromAPI.js');
const { Diets } = require('../db.js');


//*Iterar sobre el Array url100, y buscar en su propiedad diets, 
//* obtener todos los valores de diets, y pushearlos en un nuevo 
//* array llamado dietsArray, y que no se repitan los valores.
//*Agregar todos los valores de dietsArray, a la tabla Diet de la base de datos.

const dietsArray = [];
const getDietsFromApiToDb= async () => {
    const recipes = await url100();
    recipes.forEach(el => {
        el.diets.forEach(el => {
            if (!dietsArray.includes(el)){ 
            dietsArray.push(el);
            }
        })
    })
    // console.log(dietsArray);
    const diets = 
    dietsArray.forEach(el => {
        Diets.create( {name : el})
        // console.log(el);
    })
    // console.log(diets);
}
getDietsFromApiToDb();



//* Ya cargados los ratos que trajimos de url100, en la tabla Diets de la base de datos,
//* ahora vamos a crear una función que traiga y devuelva en un ARRAY, esos datos desde 
//* la base de datos a través de sequelize. 

// console.log('POR ENTRAR a getDietsFromDb');
const getDietsFromDb = async (req, res) => {
    // console.log('ENTRO a getDietsFromDb');
    try {
        const diets = [];
        const dietsDB = await Diets.findAll();
        dietsDB.forEach(el => {
            diets.push(el.name);
            // console.log(el.name);
        });        
        // console.log(diets);
        res.status(200).send(diets);
    } catch (error) {
        res.status(404).send({error: 'Diets not found in the database'});        
    }
}


module.exports = {
    getDietsFromDb
}










// const ids= [];
// const getIdFromAPI = async () => {
//     const recipes = await url100();
//     recipes.forEach(el => {
//         ids.push(el.id)
//     })
//     console.log(ids);
// }
// getIdFromAPI();