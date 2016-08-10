
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import CollapsibleText from '../../components/CollapsibleText/index';
import Carousel from '../../components/Carousel/index';
import PersonCard from '../../components/PersonCard/index';

import TmdbApi from '../../services/TmdbApi';

export default class MovieDetailsScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      runtime: '',
      vote_average: '',
      images: {
        backdrops: [],
      },
      credits: {
        cast: [],
      },
    };

    TmdbApi.fetch('movie/' + this.props.movie.id, {append_to_response: 'credits,images'} )
      .then((response) => {
        this.setState( response )
      });
  }

  onBack() {
    this.props.navigator.pop();
  }

  render() {
    let releaseYear = this.props.movie.release_date.replace(/([0-9]{4}).[0-9]{2}.[0-9]{2}/, '$1');
    let runtime = this.state.runtime ? this.state.runtime + 'min' : '';
    let vote_average = this.state.vote_average;

    let photos = this.state.images.backdrops
      .slice(1, 10)
      .map((image) => {
        return TmdbApi.image( image.file_path, 'backdrop' );
      })
      .map((uri, index) => {
        return (
          <Image source={{uri: uri}} style={styles.carouselImage} key={index}/>
        );
      });

    let cast = this.state.credits.cast
      .map((person, index) => {
        return <PersonCard person={person} key={index}/>
      });

    return (
      <View style={styles.fullscreen}>
        <ScrollView style={styles.fullscreen}>
          <View>
            <Image
              resizeMode="cover"
              source={{uri: TmdbApi.image(this.props.movie.backdrop_path,'backdrop') }}
              style={ styles.coverImage }/>
            <View style={styles.contentContainer}>

              <View style={styles.section}>
                <Text style={styles.title}>{this.props.movie.title}</Text>
                <Text style={styles.subtitle}>
                  <Text>{releaseYear}</Text> · <Text>{runtime}</Text> · <Text>{vote_average}</Text>
                </Text>
                <CollapsibleText content={ this.props.movie.overview } style={styles.overview}/>
              </View>

              <View style={styles.section}>
                <Text style={styles.header}>Photos</Text>
                <Carousel>
                  {photos}
                </Carousel>
              </View>

              <View style={styles.section}>
                <Text style={styles.header}>Cast</Text>
                <Carousel>
                  {cast}
                </Carousel>
              </View>
            </View>

          </View>
          <Footer />
        </ScrollView>
        <Header onBack={ this.onBack.bind(this) } />
      </View>
    )
  }
}

// let posterImageWidth = 150;
// let posterImageHeight = posterImageWidth*1.5;

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  coverImage: {
    // width: 300,
    height: 220,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 20,
  },
  section: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    paddingBottom: 7,
  },
  subtitle: {
    fontSize: 14,
    color: '#999999',
    paddingBottom: 15,
  },
  overview: {
    paddingBottom: 5,
    fontSize: 10,
  },
  header: {
    fontSize: 18,
    paddingBottom: 5,
  },
  carouselImage: {
    width: 100 * 1.777,
    height: 100,
    marginLeft: 5,
    marginRight: 5,
  },
});
