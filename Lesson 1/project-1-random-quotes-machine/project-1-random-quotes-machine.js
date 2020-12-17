// 1. navigation - done
// 2. add event listener - done
// 3. create data structure with quotes - done
// 4. get random quote
// 5. display random quote

// Navigation
let p = document.getElementById('quote');
let button = document.querySelector('button');

let quotes = ['С первым осенним холодком жизнь начнется сначала.',
    'Остановись, попробуй на вкус ветер...',
    'Я люблю раннюю осень. В это время кажется: все еще будет хорошо.',
    'Осень — единственное время года, которое учит.',
    'Осень — это пора, когда одинокие люди согревают замёрзшие сердца дымом сигарет.',
    'Осень — это сезон проверки на наличие долгов перед прошлым...',
    'Иногда я спрашиваю себя, чем пахнет осень? Мой ответ — это запах фейерверка осенних листьев и красного вина.',
    'У любви тоже есть осень и познаёт её тот, кто забыл вкус поцелуев любимого.',
    'Тёмной птицею в сердце входит новая осень.',
    'Первое дыхание осени — просто счастье после жаркого и знойного лета.'];

function getRandomQuote() {
    p.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

// Get random quote on init
getRandomQuote();

// Add event listener for random quote button
button.addEventListener('click', getRandomQuote);
















