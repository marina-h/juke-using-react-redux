import React from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {addSongToPlaylist} from '../action-creators/playlists';
import {connect} from 'react-redux';

class AddSongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({
      songId: 1,
      error: false
    }, store.getState());
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();
    const playlistId = this.props.playlistId;
    const songId = this.state.songId;

    store.dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    return (
      <AddSong
        {...this.props}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log('addSongContainer ownProps', ownProps)
  return {
    songs: state.songs,
    error: state.error,
    playlistId: state.playlists.selected.id
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSongContainer);













