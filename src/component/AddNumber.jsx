import React, { Component } from 'react';
import store from '../store';
export default class AddNumber extends Component {
  state = {
    size: 0
  }
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input type="button" value="+"
          onClick={() => {
            // this.props.onClick(this.state.size)
            store.dispatch({ type: 'INCREMENT', size: this.state.size });
          }}
        >
        </input>
        <input type="text" value={this.state.size} onChange={(e) => { this.setState({ size: Number(e.target.value) }) }}></input>
      </div >
    );
  }
}