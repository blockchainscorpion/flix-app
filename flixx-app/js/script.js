const global = {
  currentPage: window.location.pathname,
};

// Initialize App

function init() {
  switch (global.currentPage) {
    case '/':
      console.log('Home Page');
      break;
    case '/shows.html':
      console.log('Shows Page');
      break;
    case '/movie-details.html':
      console.log('Details Page');
      break;
  }
}

// init();

document.addEventListener('DOMContentLoaded', init);
