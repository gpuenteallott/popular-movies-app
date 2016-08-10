
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, View } from 'react-native';

import TmdbApi from '../../services/TmdbApi';

export default class Carousel extends Component {

  render() {
    return (
      <ScrollView style={styles.wrap}
        automaticallyAdjustContentInsets={false}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onMomentumScrollEnd={this.onAnimationEnd}
      >
        {this.props.children}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    marginLeft: -20,
    marginRight: -20,
  },
});
