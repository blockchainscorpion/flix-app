// require('dotenv').config();

export const api = {
  currentPage: window.location.pathname,
  
  apiData: {
    API_KEY: process.env.API_KEY,
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};
// console.log('API Key:', api.apiData.API_KEY);

