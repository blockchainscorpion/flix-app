// require('dotenv').config();

export const api = {
  currentPage: window.location.pathname,

  // In a production app, this key should not be stored in code. This is for demonstration purposes only.
  // Register your free key at https://www.themoviedb.org/settings/api then paset it here.
  // A production app would make a request to a backend server to get your API key. E.G: to a .env file stored on your server.

  apiData: {
    apiKey: '0764feff15f2d9ad932c8dc7a24a2147',
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};

// In a production app, this key should not be stored in code. This is for demonstration purposes only.
// Register your free key at https://www.themoviedb.org/settings/api then paset it here.
// A production app would make a request to a backend server to get your API key. E.G: to a .env file stored on your server.

// api: {
//   apiKey: '0764feff15f2d9ad932c8dc7a24a2147',
//   apiUrl: 'https://api.themoviedb.org/3/',
// },
