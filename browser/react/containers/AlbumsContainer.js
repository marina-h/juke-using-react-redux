import React, {Component} from 'react';
import store from '../store';
import Albums from '../components/Albums';
import {connect} from 'react-redux';


// class AlbumsContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().albums;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().albums);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return <Albums albums={this.state.list}/>;
//   }

// }

function mapStateToProps(state, ownProps) {
  return {
    albums: state.albums.list
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

// export default AlbumsContainer;
