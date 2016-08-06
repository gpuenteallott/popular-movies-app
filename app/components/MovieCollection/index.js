
import React, { Component } from 'react';
import { ListView } from 'react-native';

var MovieRow = require('./components/MovieRow/index');
var fetchTmdb = require('../../services/fetchTmdb');

class MovieCollection extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds
    };

    fetchTmdb('movie/popular')
      .then( function( response ) {
        if ( response.results ) {
          this.setState({
            dataSource: ds.cloneWithRows( response.results )
          });
        }
      }.bind(this));
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(movie) => <MovieRow title={ movie.title } />}
      />
    )
  }
}

module.exports = MovieCollection;

