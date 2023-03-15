const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo dietas
  sequelize.define('diets', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        validate: {
            in:[["vegetarian", "vegan" , "glutenFree","dairyFree"]]
         },
        alloNull: false,
    },
  });
}