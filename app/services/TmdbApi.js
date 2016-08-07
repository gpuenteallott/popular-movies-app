
var TMDB_API_KEY = '059e0511e05379fabc35ce28ff6c978c';
var TMDB_API_BASE_URL = 'https://api.themoviedb.org/3/';

class TmdbApi {
  constructor( config ) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl;
  }

  loadRemoteConfiguration() {
    this.fetch('configuration')
      .then((remoteConfig) => {
        this.remoteConfig = remoteConfig
      })
      .catch((error) => {
        console.error(error);
      });
  }

  image( relativePath, type ) {
    if ( this.remoteConfig ) {
      return this.remoteConfig.images.secure_base_url + this.remoteConfig.images[ type+'_sizes' ][0] + relativePath;
    }
  }

  fetch( url ) {
    return this._fetchJson( TMDB_API_BASE_URL + url + '?api_key=' + TMDB_API_KEY );
  }

  _fetchJson( url ) {
    return fetch( url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

module.exports = new TmdbApi({
  apiKey: '059e0511e05379fabc35ce28ff6c978c',
  baseUrl: 'https://api.themoviedb.org/3/'
});
