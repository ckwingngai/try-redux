import React, { Component } from 'react';

export default class Counter extends Component {
  componentWillMount() {
    console.log('componentWillMount()', this.props);
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps()', this.props);
  }
  render() {
    console.log('render Counter', this.props);
    const { value, actions } = this.props;
    return (
      <div>
        <h2>Clicked: {value} times</h2>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
      </div>
    );
  }
}
