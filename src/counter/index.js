import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions';

class Counter extends Component {
  componentWillMount() {
    // console.log('componentWillMount()', this.props);
  }
  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps()', this.props);
  }
  render() {
    console.log(this.props);
    const { payload, actions } = this.props;
    return (
      <div>
        <h2>Clicked: {payload.counter} times</h2>
        <button onClick={actions.increment}>+</button>
        <button onClick={actions.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.counter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
