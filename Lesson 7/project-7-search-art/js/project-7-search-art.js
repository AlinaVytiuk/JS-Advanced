const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'http://newsapi.org/v2/everything?sources=the-verge&from=2021-01-26&sortBy=publishedAt&apiKey=76b9ea051cda4172896ec235d149bfb9';

let news = [];

fetch(endpoint)
    .then(function (blob) {
        return blob.json();
    })
    .then(function (data) {
        news.push(...data.articles)
    });

function findMatches(text, news) {
    text = text.toLowerCase();

    return news.filter(function (articles) {
        let novelty = articles.title.toLowerCase();

        return novelty.includes(text);
    })
}

function displayMatches() {
    const value = this.value;
    const matchArray = findMatches(value, news);
    const regex = new RegExp(`${value}`, 'gi');

    let itemText;

    if (this.value.length === 0) {
        suggestions.innerHTML = '';

        return;
    }

    suggestions.innerHTML = matchArray.map(function (articles) {
        itemText = articles.title.replaceAll(regex, '<i>$&</i>');

        return `
            <li>
                <span>${itemText}</span>
            </li>
        `
    }).join('');
}

searchInput.addEventListener('keyup', displayMatches);