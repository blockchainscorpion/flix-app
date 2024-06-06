const global = {
  currentPage: window.location.pathname,
};

// Initialize App



function init() {
  switch (global.currentPage) {
    case '/flixx-app/index.html':
      console.log('Home Page');
      break;
    case '/flixx-app/shows.html':
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
      console.log("nada");
      break;
  }
}

// init();

document.addEventListener('DOMContentLoaded', init);
