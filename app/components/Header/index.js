
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Header extends Component {
  render() {
    let backButton;
    if ( this.props.onBack ) {
      backButton = (
        <TouchableOpacity onPress={this.props.onBack}>
          <Image
          source={require('../../img/back-arrow.png')}
          style={styles.backArrow} />
        </TouchableOpacity>
      );
    }

    let headerTitle;
    if ( this.props.title ) {
      headerTitle = (
        <Text style={styles.headerTitle}>
          { this.props.title }
        </Text>
      );
    }

    return (
      <View style={styles.header}>
        { backButton }
        { headerTitle }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    // backgroundColor: '#D99CFF',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerTitle: {
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  backArrow: {
    width: 24,
    height: 24,
  }
});
