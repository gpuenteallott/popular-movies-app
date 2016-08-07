
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import MovieCollection from '../../components/MovieCollection/index';

export default class MovieCollectionScene extends Component {

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
        <View style={styles.collectionContainer}>
          <MovieCollection onMovieSelected={ this.onMovieSelected.bind(this) } />
          <Header title="Popular Movies"/>
          <Footer />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  collectionContainer: {
    paddingTop: 70,
    flex: 1,
  },
});

