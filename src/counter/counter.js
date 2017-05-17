import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterAction from './counterActions';

class Counter extends Component {
  render() {
    console.log('render Counter', this.props);
    const { counter, actions } = this.props;
    return (
      <div>
        <h2>Clicked: {counter} times</h2>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
