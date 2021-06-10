const express = require('express');
const app = express();              //создает объект приложения, который в является модулем
                                    //app.use(express.json()) - разрешает принимать в виде JSON
                                    
const PORT = 5050;

const { getCookies } = require('./controllers/cookie');
app.get('/get-cookies', getCookies);

const { createRecipe, getRecipe} = require('./controllers/recipes')
const { getNews, deleteNews } = require('./controllers/news')


app.post('/create-recipe', createRecipe);

app.get('/get-recipe', getRecipe);

app.get('/get-news', getNews);
// app.post('/add-news', addNews);
app.delete('/delete-news/:newsId', deleteNews);

app.listen(PORT, () => {
    console.log('Бекенд приложение запущено на порту:' + PORT);
});


// app.delete('/', )










// function getNewRecipe(req, res) {
//     res.status(200).json(DB_RECIPE)
// }
// app.get('/newRecipe', getNewRecipe)  

