let news = [
    {
        title: 'Крутой заголовок',
        content: 'Интересный контент',
        lang: 'ru',
        id: '1'   
    },
    {
        title: 'Сонун заголовок',
        content: 'Кызыктуу контент',
        lang: 'kg', 
        id: '2' 
    },
    { 
        title: 'Nice title',
        content: 'Fascinating content',
        lang: 'en', 
        id: '3'
    }
];

exports.getNews = function(req, res){
    console.log('Request language:', req.headers.lang);
    console.log('Request headers:', req.headers);
    console.log('Query Params: ', req.query);



    const lang = req.headers.lang;

    if (!lang) {
        lang = 'ru';
    }

    const filteredNews = news.filter(
        (oneNews) => oneNews.lang === req.headers.lang,
    );
    res.status(200).json(filteredNews);
}

exports.deleteNews = function(req, res) {

    console.log('ID Params:', req.params);
    console.log('NewsId value:', req.params.newsId);


if (!existingNews) {
    return res.status(400).json('Вы удаляете не существующую новость!')
}

news = news.filter(oneNews => oneNews.id !== req.params.newsId)

    res.status(201).json('Новость успешно удалена!');
}


exports.updateOneNews = function (req, res) {
    console.log(req.body);
    console.log(req.params.id);

    const existingNews = news.find((oneNews) => oneNews.id === req.params.id); 

    if (!existingNews) {
        return res.status(404).json('Новость не найдена');
    }

    const updatedNews = {
        ...existingNews,
        ...req.body,
    };

    news =  news.filter(n => n.id !== updatedNews.id);
    news.push(updatedNews);


    // console.log(updatedNews)
    res.status(201).json(`Обновил новость: ${req.params.id}`);
}













