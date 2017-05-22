import React, {Component} from 'react';
import store from '../store';
import { connect } from 'react-redux';

import Station from '../components/Station';
import {convertSong} from '../utils';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps) {
  const genreName = ownProps.params.genreName;
  return {
    genreName: genreName,
    songs: filterAndConvertSongs(state.songs, genreName),
    isPlaying: state.player.isPlaying,
    currentSong: state.player.currentSong
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('dispatch', dispatch)
  console.log('ownProps', ownProps)
  return {
    // toggleOne: dispatch(toggleSong())
  };
}

function filterAndConvertSongs(songsArr, genreName) {
  let filteredSongs = songsArr.filter((song) => {
    return song.genre === genreName;
  });
  return filteredSongs.map(convertSong);
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
