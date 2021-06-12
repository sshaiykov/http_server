const express = require('express');
const router = express.Router();

const { getCookies } = require('../controllers/cookie');
router.get('/get-cookies', getCookies);

const { createRecipe, getRecipe} = require('../controllers/recipes')
const { getNews, deleteNews, updateOneNews } = require('../controllers/news')

router.post('/create-recipe', createRecipe);

router.get('/get-recipe', getRecipe);

router.get('/get-news', getNews);
// app.post('/add-news', addNews);
router.delete('/delete-news/:newsId', deleteNews);
router.patch('/news/:id', updateOneNews)

exports.router = router