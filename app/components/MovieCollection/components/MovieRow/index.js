
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MovieRow extends Component {
  render() {
    return (
      <View style={styles.movieRow}>
       <Text style={styles.movieTitle}>{this.props.title}</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  movieRow: {
    borderColor: '#C5BACC',
    borderBottomWidth: 1,
    padding: 15,
    backgroundColor: '#F6E9FF',
  },
  movieTitle: {
    color: '#333333',
  },
});


module.exports = MovieRow;
