/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet } from 'react-native';

import MovieCollectionScene from './app/scenes/MovieCollectionScene/index';
import MovieDetailsScene from './app/scenes/MovieDetailsScene/index';
import TmdbApi from './app/services/TmdbApi';

class PopularMovies extends Component {

  constructor(props, context) {

    super(props, context);

    // This defines the initial navigation state.
    this.state = {
      navigationState: {
        index: 0,
        routes: [{key: 'MovieCollectionScene'}],
      },
    };

    TmdbApi.loadRemoteConfiguration();
  }

  renderScene(route, navigator) {
    if(route.name === 'MovieCollectionScene') {
     return <MovieCollectionScene navigator={navigator} />
    }
    else if(route.name === 'MovieDetailsScene') {
      return <MovieDetailsScene navigator={navigator} movie={route.movie} />
    }
    else {
      throw new Error('Navigator unknown route');
    }
  }
  render() {
    return (
      <Navigator style={styles.navigator}
        initialRoute={{ name: 'MovieCollectionScene' }}
        renderScene={ this.renderScene } />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex:1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('PopularMovies', () => PopularMovies);
