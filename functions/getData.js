// functions/getData.js

exports.handler = async function (event, context) {
  const apiKey = process.env.TMDB_API_KEY; // Access environment variable
  const apiUrl = 'https://api.themoviedb.org/3/';

  const { endpoint } = JSON.parse(event.body); // Extract endpoint from request body

  try {
    const response = await fetch(
      `${apiUrl}${endpoint}?api_key=${apiKey}&language=en-US`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
