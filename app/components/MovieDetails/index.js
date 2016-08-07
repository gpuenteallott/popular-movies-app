
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

var TmdbApi = require('../../services/TmdbApi');

class MovieDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image source={{uri: TmdbApi.image(this.props.movie.backdrop_path,'backdrop') }}
          style={ styles.mainImage }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainImage: {
    width: 300,
    height: 169
  }
});

module.exports = MovieDetails;

