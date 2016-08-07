
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import TmdbApi from '../../services/TmdbApi';

export default class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uris: []
    };

    TmdbApi.fetch('movie/'+this.props.movieId+'/images')
      .then((response) => {
        this.setState({
          uris: response.backdrops.map((image) => {
            return TmdbApi.image( image.file_path, 'backdrop' );
          })
        })
      });
  }

  render() {

    let images = this.state.uris
      .slice(1, 10)
      .map((uri, index) => {
        return (
          <Image source={{uri: uri}} style={styles.image} key={index}/>
        );
      });

    return (
      <ScrollView style={styles.wrap}
        // contentContainerStyle={styles.container}
        automaticallyAdjustContentInsets={false}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onMomentumScrollEnd={this.onAnimationEnd}
      >
        {images}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    // flexDirection: 'row',
  },
  image: {
    width: 100 * 1.777,
    height: 100,
  }
});
