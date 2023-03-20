const { postRecipesToDb } = require('../handlers/postRecipesToDb.js');
const { getByName } = require('../controllers/getByName.js');

//* postRecipes recibe el req de body con los datos de la receta a crear, luego busca con el handler getByName, 
//* si el req.name existe en la API y en la base de datos, si existe, devuelve un mensaje avisando que ya existe, 
//* si no existe, llama al handler postRecipesToDb que crea la receta en la base de datos y devuelve un mensaje de éxito.



const postRecipes = async (req, res, next) => {
    const { name, image, recipeSummary, healthScore, stepByStep, diets } = req.body;
    if (await getByName(name)) {
        res.send('Recipe already exists')
    } else {
        await postRecipesToDb(name, image, recipeSummary, healthScore, stepByStep, diets)
        res.send('Recipe created successfully')
    }
}

module.exports = {postRecipes};



















// function (req, res, next) {
//     const { name, image, recipeSummary, healthScore, stepByStep, diets } = req.body;
//     Recipe.create({
//         name,
//         image,
//         recipeSummary,
//         healthScore,
//         stepByStep,
//         diets,
//         origin: "Data Base"
//     })
//         .then((recipe) => {
//             recipe.addDiets(diets)
//                 .then(() => {
//                     res.send('Recipe created successfully')
//                 })
//         })
//         .catch((err) => {
//             res.status(400).send(err)
//         })
// }
