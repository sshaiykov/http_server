const express = require('express');
const app = express();              //создает объект приложения, который в является модулем
                                    //app.use(express.json()) - разрешает принимать в виде JSON
                                    
const { router} = require('./routes/api');
const PORT = 5050;

app.use(router);
app.use(express.json);

app.listen(PORT, () => {
    console.log('Бекенд приложение запущено на порту:' + PORT);
});

// app.delete('/', )




// function getNewRecipe(req, res) {
//     res.status(200).json(DB_RECIPE)
// }
// app.get('/newRecipe', getNewRecipe)  

