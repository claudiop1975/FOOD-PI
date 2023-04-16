const initialState = {
    recipes100 : [],
    recipesBackUp : [],
    recipeDetail: {},
    posted: {},
    diets: [],
    recipesOredByName: [],
    recipesOredByScore: [],
};


const reducer = (state = initialState, action) => {
    //* CASO EN EL QUE PIDA LAS 100 PRIMERAS RECETAS Y LAS GUARDE EN EL ESTADO.
    //* CASO EN EL QUE PIDA LAS RECETAS POR NOMBRE Y LAS GUARDE EN EL ESTADO.
    //* CASO EN EL QUE PIDA EL DETALLE DE UNA RECETA Y LA GUARDE EN EL ESTADO.
    //* CASO EN EL QUE GUARDE UNA RECETA EN LA BASE DE DATOS Y ADEMÁS LAS AGREGUE.
    //* CASO EN EL QUE TRAIGA LAS DIETAS DE LA BASE DE DATOS Y LAS GUARDE EN EL ESTADO.
    switch (action.type) {
        case 'GET_RECIPES_100':
            return {
                ...state,
                recipes100: action.payload,
                recipesBackUp: action.payload
            }
        case 'GET_RECIPES_BY_NAME':
            return {
                ...state,
                recipes100: action.payload
            }
        case 'GET_RECIPES_BY_ID':
        // console.log(action.payload);    
        return {
                ...state,
                recipeDetail: action.payload
            }
        case 'POST_RECIPE':
            return {
                posted: action.payload
            }
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload
            };

        case 'ORDER_BY_NAME':
        const recipeName= [...state.recipes100]
        const orderByName = action.payload === "asc" ? recipeName.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        :
        recipeName.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
            return {
                ...state,
                recipes100: orderByName
            };

        case 'ORDER_BY_SCORE':
            const recipeScore= [...state.recipes100]
            const orderByScore = action.payload === "moreHealthy" ? recipeScore.sort((a, b) => a.healthScore > b.healthScore ? 1 : -1)
            :
            recipeScore.sort((a, b) => a.healthScore < b.healthScore ? 1 : -1)
            return {
                ...state,
                recipes100: orderByScore
            };

        case 'FILTERED_BY_DIETS':
            const recipes = [...state.recipesBackUp]
            // console.log("recipes es el back del estado:",recipes);
            const dietFiltered = action.payload === "all" ? recipes 
            :
            recipes.filter(recipe => {
                    let diet = recipe.diets.map(d => d)
                    // console.log(diet);
                    // console.log(recipe.diets);
                    if (diet.includes(action.payload)){
                        return recipe
                    }
                })  
                
            return {
                ...state,
                recipes100: dietFiltered
            }
        case 'FILTERED_BY_ORIGIN':
            
            const recipesOrigin = [...state.recipesBackUp]
            // console.log("recipesOrigin es el back del estado:",recipesOrigin);//*BORRAR
            const originFiltered = action.payload === "all" ? recipesOrigin //*const o let??
            : 
            recipesOrigin.filter(recipe => {
                if (action.payload === "api"){
                    if (!isNaN(recipe.idRecipe)){
                        return recipe
                    }
                } else {
                    if (isNaN(recipe.idRecipe)){
                        return recipe
                    }
                }
            })
            return {
                ...state,
                recipes100: originFiltered
            }

            

        default:
            return {...state};
    }
}

export default reducer;