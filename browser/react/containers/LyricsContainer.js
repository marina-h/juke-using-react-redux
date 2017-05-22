import React, {Component} from 'react';
import store from '../store';
import Lyrics from '../components/Lyrics';
import {connect} from 'react-redux';

import {searchLyrics} from '../action-creators/lyrics';

class LyricsContainer extends Component {

  constructor() {

    super();

    this.state = Object.assign({
      artistQuery: '',
      songQuery: ''
    }, store.getState());

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  // componentDidMount() {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState());
  //   });
  // }
  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      store.dispatch(searchLyrics(this.state.artistQuery, this.state.songQuery));
    }
  }

  render() {
    return (
      <Lyrics
        {...this.state}
        lyrics={this.props.lyrics}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

function mapStateToProps(store, ownProps) {
  return {
    lyrics: store.lyrics
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LyricsContainer)

// export default LyricsContainer;

