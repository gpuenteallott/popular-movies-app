
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import TmdbApi from '../../services/TmdbApi';

export default class MovieDetails extends Component {
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
