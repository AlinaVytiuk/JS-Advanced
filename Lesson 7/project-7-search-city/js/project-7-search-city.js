const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then(function (blob) {
        return blob.json();
    })
    .then(function (data) {
        cities.push(...data);
    });

function findMatches(text, cities) {
    text = text.toLowerCase();

    return cities.filter(function (place) {
        let city = place.city.toLowerCase(),
            state = place.state.toLowerCase();

        return city.includes(text) || state.includes(text);
    })
}

function displayMatches() {
    const value = this.value;
    const matchArray = findMatches(value, cities);
    const regex = new RegExp(`${value}`, 'gi');

    let itemText;

    if (this.value.length === 0) {
        suggestions.innerHTML = '';

        return;
    }

    suggestions.innerHTML = matchArray.map(function (place) {
        itemText = place.city.replaceAll(regex, '<i>$&</i>') + ' ' + place.state.replaceAll(regex, '<i>$&</i>');

        return `
            <li>
                <span>${itemText}</span>
            </li>
        `
    }).join('');
}

searchInput.addEventListener('keyup', displayMatches);