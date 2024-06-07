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

// Initialize App (runs on every page & pageload)
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
      console.log('nada');
      break;
  }

  // highlight active link
  highlightActiveLink();
}

// init();

document.addEventListener('DOMContentLoaded', init);
