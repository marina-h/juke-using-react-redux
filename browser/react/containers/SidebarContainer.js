import React, {Component} from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';

// class SidebarContainer extends Component {

//   constructor() {
//     super();
//     this.state = store.getState().playlists;
//   }

//   componentDidMount() {
//     this.unsubscribe = store.subscribe(() => {
//       this.setState(store.getState().playlists);
//     });
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     return (
//       <Sidebar playlists={this.state.list}/>
//     );
//   }

// }

function mapStateToProps(state, ownProps) {
  return {
    playlists: state.playlists.list
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Sidebar);

// export default SidebarContainer;
