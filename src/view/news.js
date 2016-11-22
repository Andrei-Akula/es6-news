import articleRender from './articleCard.js';

function renderNews(elemId, news) {
    let elem = document.getElementById(elemId);
    if (elem && news.status == 'ok') {
        elem.innerHTML = news.articles
            .map(a => '<li class="col-xs-12 col-lg-10 col-xl-8">' + articleRender(a) + '</li>')
            .reduce((txt, li) => txt + li, '<ul class="articles row">') + '</ul>';
    }
}

function renderError(elemId, reason) {
    let elem = document.getElementById(elemId);
    if (elem) {
        elem.innerHTML = reason;
    }
}

export {
    renderNews,
    renderError
};
