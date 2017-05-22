import React, {Component} from 'react';
import AUDIO from '../audio';
import store from '../store';
import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux';

class PlayerContainer extends Component {

  componentDidMount() {

    AUDIO.addEventListener('ended', this.next);
    AUDIO.addEventListener('timeupdate', () => {
      store.dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
    });

  }

  render() {
    return <Player
      {...this.props}
    />;
  }

}

function mapStateToProps(state, ownProps) {
  const player = state.player;
  return {
    currentSong: player.currentSong,
    isPlaying: player.isPlaying,
    progress: player.progress,
    currentSongList: player.currentSongList
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggle: function(song, list) {
      dispatch(toggleSong(song, list));
    },
    next: function() {
      dispatch(next());
    },
    prev: function() {
      dispatch(previous());
    }

  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);

// export default PlayerContainer;
