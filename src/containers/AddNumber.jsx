import AddNumber from '../component/AddNumber';
import { connect } from 'react-redux';


function mapReduxDispatchToReactProps(dispatch) {
  return ({
    onClick: function (size) {
      dispatch({ type: 'INCREMENT', size: size })
    }
  })
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);




// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
//   render() {
//     return (
//       <AddNumber onClick={(size) => {
//         // this.props.onClick(this.state.size)
//         store.dispatch({ type: 'INCREMENT', size: size });
//       }} />
//     )
//   }
// }