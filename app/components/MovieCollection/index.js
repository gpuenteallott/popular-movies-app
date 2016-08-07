
import React, { Component } from 'react';
import { ListView } from 'react-native';

var MovieRow = require('./components/MovieRow/index');
var TmdbApi = require('../../services/TmdbApi');

class MovieCollection extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds
    };

    TmdbApi.fetch('movie/popular')
      .then( function( response ) {
        if ( response.results ) {
          this.setState({
            dataSource: ds.cloneWithRows( response.results )
          });
        }
      }.bind(this));
  }

  onMovieSelected( movie ) {
    if ( typeof this.props.onMovieSelected === 'function' ) {
      this.props.onMovieSelected( movie );
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(movie) =>
          <MovieRow
            movie={ movie }
            onSelected={ this.onMovieSelected.bind(this) }
            />
        }
      />
    )
  }
}

module.exports = MovieCollection;

