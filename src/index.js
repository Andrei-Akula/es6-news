let ajax = require('./ajax/helpers'),
    render = require('./view/render'),
    newsSrc = 'bbc-news',
    newsApiKey = '7075477dd0074880bc9b96eafd22cd03',
    containerId = 'main';


ajax.getJSON(`https://newsapi.org/v1/articles?source=${newsSrc}&apiKey=${newsApiKey}`)
    .then(news => { render.displayNews(containerId, news) })
    .catch(reason => { render.displyError(containerId, reason) });
