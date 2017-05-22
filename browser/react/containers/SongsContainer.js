import React, {Component} from 'react';
import store from '../store';
import Songs from '../components/Songs';
import {connect} from 'react-redux';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps) {
  return {
    // albums: state.albums,
    songs: ownProps.songs,
    currentSong: state.player.song,
    isPlaying: state.player.isPlaying
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleOne: function(song, list) {
      dispatch(toggleSong(song, list));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);