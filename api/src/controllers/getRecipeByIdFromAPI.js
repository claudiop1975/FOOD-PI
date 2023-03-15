
require('dotenv').config();
const axios = require('axios');
const { sequelize } = require('sequelize');
const { API_KEY } = process.env;


module.exports = getRecipeByIdFromAPI = async (req, res) => {
    // const { id } = req.params
    let id = 782585;
    // console.log(process.env)
    try {
        const {data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        const pasos = data.analyzedInstructions[0].steps
        const pasos2= pasos.map(el => el.step) 
        let Recipe= { 
            id: data.id, 
            name: data.title,
            image:data.image,
            recipeSummary:data.summary,
            healthScore: data.healthScore,
            stepByStep: pasos2,
            origin: "External API"
        }
        console.log(Recipe)
        // res.status(200).send(Recipe)
    }catch (err) {
        console.log(err)
        // res.status(400).send(err.message)
    }
};

getRecipeByIdFromAPI();
