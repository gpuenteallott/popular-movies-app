
// --
var TMDB_API_KEY = '059e0511e05379fabc35ce28ff6c978c';
var TMDB_API_BASE_URL = 'https://api.themoviedb.org/3/';
// --

module.exports = function( url ) {

  return fetch( TMDB_API_BASE_URL + url + '?api_key=' + TMDB_API_KEY, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
};