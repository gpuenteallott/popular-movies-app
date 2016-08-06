/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ListView
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            List of Posts
          </Text>
          <PostCollection />
          <Counter />
          <Image source={pic} style={styles.image}/>
        </View>
      </ScrollView>
    );
  }
}

class Post extends Component {
  render() {
    return (
      <View>
       <Text style={styles.postTitle}>{this.props.title}</Text>
       <Text style={styles.postDescription}>{this.props.description}</Text>
      </View>
    )
  }
}

class PostCollection extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds
    };

    this.fetchPosts()
      .then( function( posts ) {
        this.setState({
          dataSource: ds.cloneWithRows( posts )
        });
      }.bind(this));
  }

  fetchPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Post title={ rowData.title } description={ rowData.description } />}
      />
    )
  }
}

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};

    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Counter: { this.state.counter }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  },
  footer: {
    // flex: 1,
    backgroundColor: 'powderblue',
  },
  welcome: {
    fontSize: 20,
    borderColor: '#000000',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 5,
    textAlign: 'center',
    margin: 10,
  },
  greeting: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: 250,
    height: 150
  },
  postTitle: {
    color: '#333333',
  },
  postDescription: {
    color: '#666666',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
