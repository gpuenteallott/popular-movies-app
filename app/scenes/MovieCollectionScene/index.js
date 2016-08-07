
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

var MovieCollection = require('../../components/MovieCollection/index');
var Header = require('../../components/Header/index');
var Footer = require('../../components/Footer/index');

class MovieCollectionScene extends Component {

  /**
   * when movie is selected, we push details new to parent navigator.
   * @param  {object} movie
   */
  onMovieSelected( movie ) {
    this.props.navigator.push({
      name: 'MovieDetailsScene',
      index: 1,
      movie: movie
    });
  }

  render() {
    return (
      <ScrollView style={styles.appContainer}>
        <View style={styles.container}>
          <Header title="Popular Movies"/>
          <MovieCollection onMovieSelected={ this.onMovieSelected.bind(this) } />
          <Footer />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F6E9FF',
  },
  container: {
    flex: 1,
  },
});

module.exports = MovieCollectionScene;
