
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Image
          style={styles.attributionLogo}
          source={require('../../img/var_4_0_tmdb-logo-1Line-Blk-Bree.png')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: '#F6E9FF',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  attributionLogo: {
    /*490x75, 6.533 */
    width: 98,
    height: 15,
    opacity: .5
  }
});
