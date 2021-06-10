exports.getCookies =  function getCookies(request, response){ 
    console.log('Был вызван контроллер для получение печенек');
    
    response.status(200).json('🍪🍪🍪🍪🍪🍪')

}