import React, {Component} from 'react';
import store from '../store';
import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';
import {connect} from 'react-redux';

function mapStateToProps(state, ownProps) {
  console.log('state playlistContainer', state)
  console.log('ownProps', ownProps)
  return {
    selectedPlaylist: state.playlists.selected
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
)(Playlist);
