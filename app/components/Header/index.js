
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

class Header extends Component {
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

    return (
      <View style={styles.header}>
        { backButton }
        <Text style={styles.headerTitle}>
          { this.props.title }
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    borderColor: '#C5BACC',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: '#D99CFF',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 20,
  },
  backArrow: {
    width: 24,
    height: 24,
  }
});

module.exports = Header;