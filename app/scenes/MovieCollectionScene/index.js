
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

