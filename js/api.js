require('dotenv').config();

export const api = {
  currentPage: window.location.pathname,

  // In a production app, this key should not be stored in code. This is for demonstration purposes only.
  // Register your free key at https://www.themoviedb.org/settings/api then paset it here.
  // A production app would make a request to a backend server to get your API key. E.G: to a .env file stored on your server.

  apiData: {
    API_KEY: process.env.API_KEY,
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};
// console.log('API Key:', api.apiData.API_KEY);

// apiKey: process.env.apiKey
