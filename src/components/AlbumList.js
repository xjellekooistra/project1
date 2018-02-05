//Import libraries
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'
class AlbumList extends Component {
state = { albums: [] };

componentWillMount() {
  axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data }));
}

renderAlbums() {
  //Loop over fetched (5) albums
  return this.state.albums.map(album => <AlbumDetail key={album.title}>{album.title}</AlbumDetail>
  );
}

  render() {
    console.log(this.state);

const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.renderAlbums()}</Text>
      </View>
    );
  }
}
const styles = {
  viewStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'black'
  }
};

export default AlbumList;
