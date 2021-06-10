const DB_RECIPE = [];

exports.createRecipe = function createRecipe(req, res) {

    const clientData = req.body;

    console.log(clientData)

    DB_RECIPE.push(clientData);

    res.status(201).json(`Рецепт ${clientData.name} успешно создан`);
}



exports.getRecipe = function getRecipe(request, response) {
    const recipe = ['1 кг муки', '3 шт яиц', '200г сахара', '200мл воды' ]
    
    console.log('Был вызван контроллер для получения рецепта');

    response.status(200).json(recipe)
}
