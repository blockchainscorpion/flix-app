const global = {
  currentPage: window.location.pathname,
};

// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
} // As you can see, sometimes a foreach loop is simply easier than trying to attach an event listener to each element in an array.

highlightActiveLink();

// Function to get Movie data
async function displayMovieData() {
  const { results } = await getAPIData('movie/popular');
  // console.log(results); // The forEach replaces this
  results.forEach((movie) => {
    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `<a href="movie-details.html?id=${movie.id}">
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

// Function to get Movie data
async function displayTVShowData() {
  const { results } = await getAPIData('tv/popular');
  // console.log(results); // The forEach replaces this
  results.forEach((tv) => {
    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `<a href="tv-details.html?id=${tv.id}">
            ${
              tv.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${tv.poster_path}"
              class="card-img-top"
              alt="${tv.title}"
            />`
                : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${tv.title}"
            />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${tv.title}</h5>
            <p class="card-text">
              <small class="text-muted">Aired: ${tv.aired_}</small>
            </p>
          </div>`;

    document.getElementById('popular-shows').appendChild(div);
  });
}

// Function to fetch API data
async function getAPIData(endpoint) {
  // In a production app, this key should not be stored in code. This is for demonstration purposes only.
  // Register your free key at https://www.themoviedb.org/settings/api then paset it here.
  // A production app would make a request to a backend server to get your API key. E.G: to a .env file stored on your server.

  const API_KEY = '0764feff15f2d9ad932c8dc7a24a2147';
  const API_URL = `https://api.themoviedb.org/3/`;

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  ); /* This could alternatively be placed above with the API URL variable, but it functions better here. */
  const data = await response.json();

  return data;
}

// Initialize App (runs on every page & pageload)
function init() {
  switch (global.currentPage) {
    case '/flixx-app/index.html':
      displayMovieData(); // Display Movie data
      console.log('Home Page');
      break;
    case '/flixx-app/shows.html':
      displayTVShowData(); // Display TV Show data
      console.log('Shows Page');
      break;
    case 'flixx-app/movie-details.html':
      alert('Movie Details Page');
      break;
    case '/flixx-app/tv-details.html':
      alert('TV Details Page');
      break;

    default:
      'Nada';
      console.log('nada');
      break;
  }

  // highlight active link
  highlightActiveLink();
}

// init();

document.addEventListener('DOMContentLoaded', init);
