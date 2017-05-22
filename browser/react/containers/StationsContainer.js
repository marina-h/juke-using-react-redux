import React, {Component} from 'react';
import store from '../store';
import Stations from '../components/Stations';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    stations: convertSongsToStations(state.songs)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

function convertSongsToStations(songsArr) {
  let stations = {};
  songsArr.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  })
  return stations;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);
