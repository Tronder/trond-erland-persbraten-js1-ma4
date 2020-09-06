const url =
  'https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating';
const container = document.querySelector('.result');

async function callGames() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const results = json.results;

    container.innerHTML = '';

    results.forEach(function (game) {
      container.innerHTML += `
      <a href="question3.html?id=${game.id}" class="game">
      <h2>${game.name}</h2>
      <p>Rating: ${game.rating}</p>
      <p>Release date: ${game.released}</p>
      <img src="${game.background_image}" 
      alt="${game.name}">
      </a>`;
    });
  } catch {
    container.innerHTML = 'An error occured';
  }
}

callGames();
