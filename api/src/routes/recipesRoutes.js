const { Router } = require('express');
const recipesRoutes = Router();
const  {getById}  = require('../controllers/getById.js');
const  {getByName}  = require('../controllers/getByName.js');
const  {postRecipes}  = require('../controllers/postRecipes.js');
const {getAllRecipes} = require('../controllers/getAll.js');

recipesRoutes.get('/all', getAllRecipes)


recipesRoutes.get('/:idRecipe', getById);


recipesRoutes.get('/', getByName)
// ?Esta ruta obtiene la lista de recetas que coincidan con el nombre recibido por query. (No es necesario que sea
//?  una coincidencia exacta). Debe poder buscarla independientemente de mayúsculas o minúsculas. Si no existe la 
//? receta, debe mostrar un mensaje adecuado. Debe buscar tanto las de la API como las de la base de datos.')
// ? ESTA FUNCIÓN LLAMARÁ A UNA FUNCION (CONTROLADOR) QUE TRAIGA LOS DATOS DE LA API EXT.
// ? TAMBIEN LLAMARÁ A UNA FUNCIÓN (CONTROLADOR) QUE TRAIGA LOS DATOS DE LA BASE DE DATOS.
// ? ESTA FUNCIÓN LLAMARÁ A UN FUNCIÓN  (CONTROLADOR?)QUE EMPATE Y UNIFIQUE AMBAS RESPUESTAS PARA ENVIARLAS AL CLIENTE


recipesRoutes.post('/post', postRecipes)


// ? Esta ruta recibirá los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body.
//? res.send('Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados. Toda la información debe ser recibida por body. Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).')
// ? ESTA FUNCIÓN LLAMARÁ A UNA FUNCION (CONTROLADOR) QUE CREE CON LOS DATOS INGRESADOS UNA NUEVA RECETA EN LA BASE DE DATOS.


module.exports = {
    recipesRoutes,
}

    