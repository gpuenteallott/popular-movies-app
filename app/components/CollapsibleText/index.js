
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class CollapsibleText extends Component {

  constructor(props){
    super(props);

    this.state = {
      needsCollapsing: this.props.content.length > 120,
      isCollapsed: true,
    };
  }

  toggle() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  render() {

    let content = this.state.needsCollapsing && this.state.isCollapsed ?
      this.props.content.substring(0, 90) + '...' :
      this.props.content;

    let button;
    if ( this.state.needsCollapsing ) {
      button = (
        <Text style={styles.button} onPress={ this.toggle.bind(this) }>
          { this.state.isCollapsed ? 'More' : 'Less' }
        </Text>
      );
    }

    return (
      <Text>
        <Text>{ content }</Text> { button }
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    color: '#999999',
  },
});
