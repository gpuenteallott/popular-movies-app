
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import MovieDetails from '../../components/MovieDetails/index';

export default class MovieDetailsScene extends Component {
  constructor(props) {
    super(props);
  }

  onBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <ScrollView style={styles.appContainer}>
        <View style={styles.container}>
          <Header title="Movie Details" onBack={ this.onBack.bind(this) }/>
          <MovieDetails movie={ this.props.movie } />
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
