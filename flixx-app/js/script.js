import { api } from './api.js';

const global = {
  currentPage: window.location.pathname,

  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
  },
};

// Function to display Movie data on homepage
async function displayMovieData() {
  const { results } = await getAPIData('movie/popular');
  // console.log(results); // The forEach replaces this
  results.forEach((movie) => {
    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `<a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_pathrgb(163, 102, 10)
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>`;

    document.getElementById('popular-movies').appendChild(div);
  });
}

// Show search alert
function showAlert(message, className = 'error') {
  // New div to contain the custom alert message
  const alertEl = document.createElement('div');

  // Add the custom css alert
  alertEl.classList.add('alert', className);

  // Append the alert div to a newly created text node
  alertEl.appendChild(document.createTextNode(message));

  // Append the text node to the relevant DOM element
  document.querySelector('#alert').appendChild(alertEl);

  // Set a timeout for the alert so it doesn't just stay on the page
  setTimeout(() => alertEl.remove(), 3000);
}

// Displaying the search results
async function displaySearchResults(results) {
  results.forEach((result) => {
    const div = document.createElement('div');

    div.classList.add('card');

    /* The code snippet below dynamically creates a HTML structure to display data fetched from an API.
     * It handles different key/value pairs based on the type of content (movie or TV show).
     * The structure includes a link to a details page, an image (or a placeholder if no image is available),
     * the title, and the release date.
     *  */
    div.innerHTML = `
      <a href="${global.search.type}-details.html?id=${result.id}">
      ${
        result.poster_path
          ? `<img src=
      "https://image.tmdb.org/t/p/w500/${result.poster_path}"
      class="card-img-top"
        alt="${global.search.type === 'movie' ? result.title : result.name}"
        />`
          : `<img src=
        "images/no-image.jpg" class="card-img-top" alt="${
          global.search.type === 'movie' ? result.title : result.name
        }"
          />`
      } </a>
      <div class="card-body">
        <h5 class="card-title">${
          global.search.type === 'movie' ? result.title : result.name
        }
        </h5>
        <p class="card-text">
        <small class="text-muted">Release:
        ${
          global.search.type === 'movie'
            ? result.release_date
            : result.first_air_date
        }</small>
        </p>
      </div>`;
    document.getElementById('search-results').appendChild(div);
  });
}
// Search logic: Movies & Tv
// queryString returns everything from the question mark onward in the page URL
async function search() {
  // The querystring is everything from the '?' onward in the browser url.
  const queryString = window.location.search;

  // Returns the individual params of the url
  const urlParams = new URLSearchParams(queryString);

  // Defining the global search object-elements object-(global) element/s(search."")
  // This then points the urlParams variable to the relevant element in the search.html doc
  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term');
  global.search.page = urlParams.get('pagination');

  // Setting the logic for implementing the custom alert (red alert box)
  if (global.search.term !== '' && global.search.term !== null) {
    // The response from the API is an object that contains an array of results.
    // So, I need to de-structure the object and putt out the individual elements that I need to make the search page functional.
    const { results, totalPages, page } = await searchAPIData();

    // Verify that there are actually results
    if (results.length === 0) {
      showAlert('No results found');
      return;
    }
    // Display the search results if the lenght is > 0.
    displaySearchResults(results);
    console.log(results); // delete when no longer needed
    document.getElementById('search-term').value = '';

    // Display the custom error message when no search term is entered
  } else {
    showAlert('Enter a search term');
    return;
  }
}

// Homepage (movies) swiper display logic
async function displaySlider() {
  const { results } = await getAPIData('movie/now_playing'); // fetching the results from the api
  // console.log(results);

  // Loop through the results so I can add them to the DOM
  results.forEach((movie) => {
    //Create a new element for the swiper
    const swiperDiv = document.createElement('div');

    // Add the swiper class
    swiperDiv.classList.add('swiper-slide');

    // Define the swiper structure using template string: ``
    swiperDiv.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
              <img src="https://image.tmdb.org/t/p/w500${
                movie.poster_path
              }" alt="${movie.title}" />
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(
                1
              )} / 10
            </h4>
          `;

    // Append the swiper to the relevant existing DOM element
    document.querySelector('.swiper-wrapper').appendChild(swiperDiv);

    initSwiper(); // Calling the function to initialize the swiper
  });
}

// Homepage (shows) swiper display logic
async function displaySliderForShows() {
  const { results } = await getAPIData('tv/popular'); // fetching the results from the api
  // console.log(results);

  // Loop through the results so I can add them to the DOM
  results.forEach((show) => {
    //Create a new element for the swiper
    const swiperDiv = document.createElement('div');

    // Add the swiper class
    swiperDiv.classList.add('swiper-slide');

    // Define the swiper structure using template string: ``
    swiperDiv.innerHTML = `
            <a href="show-details.html?id=${show.id}">
              <img src="https://image.tmdb.org/t/p/w500${
                show.poster_path
              }" alt="${show.name}" />
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i> ${show.vote_average.toFixed(
                1
              )} / 10
            </h4>
          `;

    // Append the swiper to the relevant existing DOM element
    document.querySelector('.swiper-wrapper').appendChild(swiperDiv);

    initSwiper(); // Calling the function to initialize the swiper
  });
}

//Initialize swiper see - https://swiperjs.com/get-started

function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

// Function to display movie details page
async function displayMovieDetails() {
  // Splitting any result that shows up from this function
  const movieID = window.location.search.split('=')[1];

  // console.log(movieID); // returns ?id=653346 - use the split method to turn this into an array, and split it up in whatever way I need.
  // Above I added ".split("=")" - this means i want the split to occur at the equal sign, returning this: [?id, 653346].
  // The [1] is the second element in the array, which is the id number. So, it returns only the id number.

  // Get & display the movie data for the selected movie ↓
  const movie = await getAPIData(`movie/${movieID}`);

  // Invoking ehr image overlay function
  displayBackgroundImage('movie', movie.backdrop_path);

  const div = document.createElement('div');

  // I don't need to add the class if i plan to leave the class in the div content see 'div.innerHTML below'
  // div.classList.add('details-top');

  div.innerHTML = `
            <div class="details-top">
          <div>
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            }
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>
              ${movie.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              
              ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
            </ul>
            <a href="#" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> ${addCommas(
              movie.budget
            )}</li>
            <li><span class="text-secondary">Revenue:</span> $${addCommas(
              movie.revenue
            )}</li>
            <li><span class="text-secondary">Runtime:</span> ${
              movie.runtime
            } minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${movie.production_companies
            .map((company) => `<span>${company.name}</span>`)
            .join('')}</div>
        </div>`;

  // Adding the movie details to the relevant DOM element.
  document.querySelector('#movie-details').appendChild(div);
}

// Function to display show details page
async function displayShowDetails() {
  const showID = window.location.search.split('=')[1];
  // console.log(movieID); // returns ?id=653346 - use the split method to turn this into an array, and split it up in whatever way I need.
  // Above I added ".split("=")" - this means i want the split to occur at the equal sign, returning this: [?id, 653346].
  // The [1] is the second element in the array, which is the id number. So, it returns only the id number.
  // Get & display the movie data for the selected movie ↓

  const show = await getAPIData(`tv/${showID}`);

  // Background Image overlay
  displayBackgroundImage('tv', show.backdrop_path);

  const div = document.createElement('div');

  // div.classList.add('details-top');

  div.innerHTML = `
            <div class="details-top">
          <div>
            ${
              show.backdrop_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${show.backdrop_path}"
              class="card-img-top"
              alt="${show.name}"
            />`
                : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
            }
          </div>
          <div>
            <h2>${show.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${show.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${show.first_air_date}</p>
            <p>
              ${show.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              
              ${show.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
            </ul>
            <a href="/flixx-app/index.html" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Number of episodes:</span> ${addCommas(
              show.number_of_episodes
            )}
            </li>
            <li><span class="text-secondary">Last Aired:</span>  ${
              show.last_air_date
            }
            </li>
            <li><span class="text-secondary">Episode Runtime:</span> ${
              show.episode_run_time
            } minutes</li>
            <li><span class="text-secondary">Status:</span> ${show.status}</li>
          </ul>
          <h4>Production Countries</h4>
          <div class="list-group">${show.production_countries
            .map((company) => `<span>${company.name}</span>`)
            .join('')}</div>
        </div>`;
  document.querySelector('#show-details').appendChild(div);
}

// Function to display show data on homepage
async function displayShowData() {
  const { results } = await getAPIData('tv/popular');

  // console.log(results);
  /*  The forEach replaces the console.log(results) - it can be helpful to keep 
  this active to see what it's doing, and to see the data structure until i'm happy.  */

  results.forEach((show) => {
    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `<a href="show-details.html?id=${show.id}">
            ${
              show.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />`
                : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">First Aired: ${
                show.first_air_date
              }</small>
            </p>
          </div>`;

    document.getElementById('popular-shows').appendChild(div);
  });
}

// Display backdrop image on movie-details page
async function displayBackgroundImage(type, backgroundPath) {
  // Creating and calling the overlay image
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${backgroundPath})`; // The background path could also be "backdrop_path", but i already passed in the parameter that I want to use.
  // Overlay styling
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.2';

  // Checking the type, to know which page we are on.
  if (type === 'movie') {
    document.querySelector('#movie-details').appendChild(overlayDiv);
  } else {
    document.querySelector('#show-details').appendChild(overlayDiv);
  }
}

// Function to fetch API data
async function getAPIData(endpoint) {
  // const API_KEY = api.apiData.apiKey;
  // const API_URL = api.apiData.apiUrl;

  const response = await fetch(
    `${api.apiData.apiUrl}${endpoint}?api_key=${api.apiData.apiKey}&language=en-US`
  ); /* This could alternatively be placed above with the API URL variable, but it functions better here. */

  if (!response.ok) {
    console.log('Error: ' + response.statusText);
    showSpinner();
  } else {
    hideSpinner();
  }
  const data = await response.json();

  return data;
}

//Make request to search API data
async function searchAPIData() {
  try {
    const response = await fetch(
      `${api.apiData.apiUrl}search/${global.search.type}?api_key=${api.apiData.apiKey}&language=en-US&query=${global.search.term}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Show the spinner
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

// Hide Spinner
function hideSpinner() {
  document.querySelector('.spinner').classList.add('hide');
}

/* console.log(global.currentPage); */ // Comment out when not needed

//Function to add commas
function addCommas(mum) {
  return mum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // This means to add a comma every three digits.
}

// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
} // As you can see, sometimes a foreach loop is simply easier than trying to attach an event listener to each element in an array.

// Initialize App (runs on every page & pageload)
function init() {
  switch (global.currentPage) {
    case '/flixx-app/index.html':
      displaySlider();
      displayMovieData(); // Display Movie data
      break;
    case '/flixx-app/shows.html':
      displaySliderForShows();
      displayShowData(); // Display show Show data
      break;
    case '/flixx-app/movie-details.html':
      displayMovieDetails();
      break;
    case '/flixx-app/show-details.html':
      displayShowDetails();
      break;
    case '/flixx-app/search.html':
      search();
      console.log(global.currentPage);
      break;

    default:
      'Nada';
      console.log('nada');
      break;
  }

  // highlight active link
  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
