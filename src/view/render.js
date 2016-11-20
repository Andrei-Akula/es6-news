require('./view.css');
let articleCard = require('./articleCard');

function displayNews(elemId, news) {
    let elem = document.getElementById(elemId);
    if (elem && news.status == 'ok') {
        elem.innerHTML = news.articles
            .map(a => '<li class="col-xs-12 col-md-8">' + articleCard.render(a) + '</li>')
            .reduce((txt, li) => txt + li, '<ul class="articles row">') + '</ul>';
    }
}

function displyError(elemId, reason) {
    let elem = document.getElementById(elemId);
    if (elem) {
        elem.innerHTML = reason;
    }
}

module.exports = {
    displayNews,
    displyError
};
