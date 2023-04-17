
const url100 = require('../handlers/get100RecipesFromAPI.js');
const { getAllRecipesFromDb } = require('../handlers/getAllRecipesFromDb.js');

const getAllRecipes = async (req, res) => {
    try {
        const recipesFromApi = await url100();
        const recipesFromDb = await getAllRecipesFromDb();
       // console.log("LO DE LA API:",recipesFromApi);//*BORRAR
       // console.log("LO DE LA DB:",recipesFromDb);//*BORRAR
        //* AHORA DEBO CHEQUEAR SI DE URL100 VIENEN RECETAS O ERROR, SI VIENE ERROR DEBO
        //* MANEJAR ESE ERROR, SI VIENEN DATOS, DEBO CHEQUEAR SI DE LA DB VIENEN
        //* RECETAS O ERROR, SI VIENE ERROR, DEBO MANEJAR ESE ERROR, Y SI VIENEN
        //* RECETAS, AL IGUAL QUE DE LA API DEBO CONCATENARLAS Y ENVIARLAS,
        //* SI VIENEN RECETAS DE UNA DE LAS FUENTES DEBO ENVIARLAS, SI VIENEN
        //* ERRORES DE LAS DOS FUENTES DEBO ENVIAR ERROR.
        //*  Y SI VIENEN DATOS DE UNA SOLA FUENTE DEBO ENVIARLOS.
        

        if (recipesFromApi) {
            if (recipesFromDb) {
                const recipes = recipesFromDb.concat(recipesFromApi);
                res.status(200).send(recipes);
            } else {
                res.status(200).send(recipesFromApi);
            }
        } else {
            if (recipesFromDb) {
                res.status(200).send(recipesFromDb);
            } else {
                res.status(404).send({message:'No se encontraron recetas'});
            }
        }
                
        
        
        
        
        //? switch (true) {
        //?     case recipesFromDb.length && recipesFromApi.length:
        //?         const recipes = recipesFromDb.concat(recipesFromApi);
        //?         res.status(200).send(recipes);
        //?         break;
        //?     case recipesFromDb.length:
        //?         res.status(200).send(recipesFromDb);
        //?         break;
        //?     case recipesFromApi.length:
        //?         res.status(200).send(recipesFromApi);
        //?         break;
        //?     default:
        //?         res.status(404).send({message:'No se encontraron recetas'});
        //? }

       
       
       
        //* if (recipesFromDb.length && recipesFromApi.length) {
        //*     const recipes = recipesFromDb.concat(recipesFromApi);
        //*     res.status(200).send(recipes);
        //* } else if (recipesFromDb.length) {
        //*     res.status(200).send(recipesFromDb);
        //* } else if (recipesFromApi.length) {
        //*     res.status(200).send(recipesFromApi);
        //* } else {
        //*     res.status(404).send({message:'No se encontraron recetas'});
        //* }


    } catch (error) {
        res.status(404).send({message:'ERROR INESPERADO DEL SERVIDOR'});
    }
  
}

module.exports = {
    getAllRecipes
}