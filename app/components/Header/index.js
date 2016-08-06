
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
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
  },
  headerTitle: {
    fontSize: 20,
  }
});

module.exports = Header;