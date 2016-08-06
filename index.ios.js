/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView
} from 'react-native';

var Header = require('./app/components/Header/index');
var Footer = require('./app/components/Footer/index');
var MovieCollection = require('./app/components/MovieCollection/index');

class PopularMovies extends Component {
  render() {
    return (
      <ScrollView style={styles.appContainer}>
        <View style={styles.container}>
          <Header title="Popular Movies"/>
          <MovieCollection />
          <Footer />
        </View>
      </ScrollView>
    );
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

AppRegistry.registerComponent('PopularMovies', () => PopularMovies);
