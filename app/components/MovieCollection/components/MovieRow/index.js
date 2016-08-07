
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

export default class MovieRow extends Component {

  _onPress() {
    if( typeof this.props.onSelected === 'function' ) {
      this.props.onSelected( this.props.movie );
    }
  }

  render() {
    return (
      <TouchableHighlight onPress={this._onPress.bind(this)}>
        <View style={styles.movieRow}>
         <Text style={styles.movieTitle}>{this.props.movie.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  movieRow: {
    borderColor: '#C5BACC',
    borderBottomWidth: 1,
    padding: 15,
  },
  movieTitle: {
    color: '#333333',
  },
});
