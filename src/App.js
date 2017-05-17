import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './counter/counter'

export default class App extends Component {
  render() {
    console.log(this.props);
    const { counter, actions } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Try Redux</h2>
        </div>
        <div className="App-intro">
          <Counter />
        </div>
      </div>
    );
  }
}
