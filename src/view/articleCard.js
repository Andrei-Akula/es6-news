export default function render(article) {
        return `<div class="card">
          <img class="card-img-top w-100" src="${article.urlToImage}" alt="${article.title}">
          <div class="card-block">
            <h4 class="card-title">${article.title}</h4>
            <p class="text-muted small">${(new Date(article.publishedAt)).toLocaleString()}</p>
            <p class="card-text">${article.description}</p>
            <a href="${article.url}" target="_blank" class="btn btn-primary">Read on BBC</a>
          </div>
        </div>`;
    }
