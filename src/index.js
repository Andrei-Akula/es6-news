import { getJSON } from './ajax/helpers.js';
import { renderNews, renderError } from './view/news.js';

let newsSrc = 'bbc-news',
    newsApiKey = '7075477dd0074880bc9b96eafd22cd03',
    containerId = 'main';


getJSON(`https://newsapi.org/v1/articles?source=${newsSrc}&apiKey=${newsApiKey}`)
    .then(news => { renderNews(containerId, news) })
    .catch(reason => { renderError(containerId, reason) });
