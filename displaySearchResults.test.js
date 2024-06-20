describe('displaySearchResults', () => {
  let global;
  let results;

  beforeEach(() => {
    // Set up the global object and mock data
    global = {
      search: {
        type: 'movie',
      },
    };

    results = [
      {
        id: 1,
        poster_path: '/path/to/poster1.jpg',
        title: 'Movie Title 1',
        release_date: '2023-01-01',
      },
      {
        id: 2,
        poster_path: null,
        title: 'Movie Title 2',
        release_date: '2023-02-01',
      },
    ];

    // Mock the DOM element
    document.body.innerHTML = '<div id="search-results"></div>';
  });

  afterEach(() => {
    // Clean up the DOM
    document.body.innerHTML = '';
  });

  it('should create card elements for each result', () => {
    displaySearchResults();

    const cards = document.querySelectorAll('.card');
    expect(cards.length).toBe(2);
  });

  it('should display the correct title and release date', () => {
    displaySearchResults();

    const cards = document.querySelectorAll('.card');

    expect(cards[0].querySelector('.card-title').textContent.trim()).toBe(
      'Movie Title 1'
    );
    expect(cards[0].querySelector('.card-text small').textContent.trim()).toBe(
      'Release: 2023-01-01'
    );

    expect(cards[1].querySelector('.card-title').textContent.trim()).toBe(
      'Movie Title 2'
    );
    expect(cards[1].querySelector('.card-text small').textContent.trim()).toBe(
      'Release: 2023-02-01'
    );
  });

  it('should use the correct image URL or placeholder', () => {
    displaySearchResults();

    const cards = document.querySelectorAll('.card');

    expect(cards[0].querySelector('img').src).toContain(
      'https://image.tmdb.org/t/p/w500/path/to/poster1.jpg'
    );
    expect(cards[1].querySelector('img').src).toContain('images/no-image.jpg');
  });
});

async function displaySearchResults() {
  results.forEach((result) => {
    const div = document.createElement('div');

    div.classList.add('card');

    div.innerHTML = `
      <a href="${global.search.type}-details.html?id=${result.id}">
      ${
        result.poster_path
          ? `<img src=
      "https://image.tmdb.org/t/p/w500${result.poster_path}"
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
