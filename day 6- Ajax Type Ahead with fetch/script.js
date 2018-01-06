const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'; //all info about cities

//empty array to put cities there
const cities = [];

//fetch data
fetch(endpoint) //converting blob from raw data into JSON
    .then(blob => blob.json())
    .then(data => cities.push(...data)); //push items into cities

//creating a function that will take an array and filter it down into subset
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex) 
    });
}

//creating a function that's gonna put in commas for us
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

//creating display function, it will be called whenever someone changes the value
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html  = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); //replacing regex(which is whatever it matches) with a span with a class of highlight 
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
         <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
         </li>
       `;
    }).join('');
    suggestions.innerHTML = html;
  }

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches); //listen for the change event and when the input changes, we gonna run displayMatches
searchInput.addEventListener('keyup', displayMatches);
