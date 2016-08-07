
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
    let absolutePath;
    if ( this.remoteConfig && this.remoteConfig.images && this.remoteConfig.images[ type+'_sizes' ] ) {
      absolutePath = this.remoteConfig.images.secure_base_url + this.remoteConfig.images[ type+'_sizes' ][1] + relativePath;
    }
    console.log('absolutePath', absolutePath);
    return absolutePath;
  }

  fetch( url ) {
    return this._fetchJson( this.baseUrl + url + '?api_key=' + this.apiKey );
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

export default new TmdbApi({
  apiKey: '059e0511e05379fabc35ce28ff6c978c',
  baseUrl: 'https://api.themoviedb.org/3/'
});
