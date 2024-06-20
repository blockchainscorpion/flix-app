// require('dotenv').config();

export const api = {
  currentPage: window.location.pathname,

  // In a production app, this key should not be stored in code. This is for demonstration purposes only.
  // Register your free key at https://www.themoviedb.org/settings/api then paset it here.
  // A production app would make a request to a backend server to get your API key. E.G: to a .env file stored on your server.

  apiData: {
    apiKey:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzY0ZmVmZjE1ZjJkOWFkOTMyYzhkYzdhMjRhMjE0NyIsInN1YiI6IjY2NjE2OThhMWY0ZGFhYzk1YWYyOWQ4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ovt6gEYT2jgTbhaeiUZSrdLcApts-UgY9uChU2oqsQc',
    apiUrl: 'https://api.themoviedb.org/3/',
  },
};
