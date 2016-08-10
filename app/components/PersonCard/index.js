
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import TmdbApi from '../../services/TmdbApi';

export default class PersonCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: TmdbApi.image( this.props.person.profile_path, 'profile') }} style={styles.image}/>
        <Text style={styles.name}>{this.props.person.name}</Text>
        <Text style={styles.character}>{this.props.person.character}</Text>
      </View>
    )
  }
}

let aspectRatio = 1.5;
let imageWidth = 90;
let containerPadding = 10;

const styles = StyleSheet.create({
  container: {
    padding: containerPadding,
    width: imageWidth + 2*containerPadding,
  },
  image: {
    width: imageWidth,
    height: imageWidth * aspectRatio,
  },
  name: {
    fontSize: 12,
    flexWrap: 'wrap',
  },
  character: {
    color: '#aaaaaa',
    fontSize: 12,
    flexWrap: 'wrap'
  },
});
