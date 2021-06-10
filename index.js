const express = require('express');
const app = express();              //создает объект приложения, который в является модулем
                                    //app.use(express.json()) - разрешает принимать в виде JSON
                                    
const PORT = 5050;

const { getCookies } = require('./controllers/cookie');
app.get('/get-cookies', getCookies);

const { createRecipe, getRecipe} = require('./controllers/recipes')

app.post('/create-recipe', createRecipe);
app.get('/get-recipe', getRecipe);


app.listen(PORT, () => {
    console.log('Бекенд приложение запущено на порту:' + PORT);
});











// function getNewRecipe(req, res) {
//     res.status(200).json(DB_RECIPE)
// }
// app.get('/newRecipe', getNewRecipe)  

