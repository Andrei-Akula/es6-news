import { getJSON } from './ajax/helpers.js';
import { renderNews, renderError } from './view/news.js';

let newsSrc = 'bbc-news',
    newsApiKey = '7075477dd0074880bc9b96eafd22cd03',
    containerId = 'main';

let url = `https://newsapi.org/v1/articles?source=${newsSrc}&apiKey=${newsApiKey}`;

// getJSON(url)
//     .then(news => { renderNews(containerId, news) })
//     .catch(reason => { renderError(containerId, reason) });


fetch(new Request(url))
    .then(response =>  {
        response.json().then(news => { renderNews(containerId, news) } );
    })
    .catch(reason => { renderError(containerId, reason) });
