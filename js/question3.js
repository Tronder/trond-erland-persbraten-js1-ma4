const detailContainer = document.querySelector('.details');

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

const url = `https://api.rawg.io/api/games/${id}`;

async function getDetails() {
  const call = await fetch(url);
  const json = await call.json();
  detailsHtml(json);
}

getDetails();

function detailsHtml(json) {
  detailContainer.innerHTML = `
    <h2>Title: ${json.name}</h2>
    <div class="image"><img src="${json.background_image}" 
    alt="${json.name}"></div>
    <p>Release Date: ${json.released}</p>
    <p><i>Description:</i><br>${json.description}</p>
    `;
}
