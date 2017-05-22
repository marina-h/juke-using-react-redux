import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import store from '../store';
import {addNewPlaylist} from '../action-creators/playlists';
import {connect} from 'react-redux';

class NewPlaylistContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      dirty: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
      dirty: true
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();
    store.dispatch(addNewPlaylist(this.state.inputValue));
  }

  render() {

    const dirty = this.state.dirty;
    const inputValue = this.state.inputValue;
    let warning = '';

    if (!inputValue && dirty) warning = 'You must enter a name';
    else if (inputValue.length > 16) warning = 'Name must be less than 16 characters';

    return (
      <NewPlaylist
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        inputValue={inputValue}
        warning={warning}
      />
    );
  }

}

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
  return {
    // handleChange: ,
    // hangleSubmit: 
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPlaylist);

// export default NewPlaylistContainer;
