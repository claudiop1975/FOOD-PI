const { Router } = require('express');
const dietsRoutes = Router();
const { getDietsFromDb } = require('../handlers/getDietsFromDb.js');


dietsRoutes.get('/get', getDietsFromDb);

//? Obtiene un arreglo con todos los tipos de dietas existentes. En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la documentación. Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.
// ? ESTA FUNCIÓN LLAMARÁ A UNA FUNCION (CONTROLADOR) QUE DEVUELVA EL ARRAY CON LOS DATOS DE LA BASE DE DATOS.

module.exports ={
    dietsRoutes,
} 