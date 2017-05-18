import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterAction from './counter/counterActions';
import logo from './logo.svg';
import './App.css';

import Counter from './counter/counter'

const App = ({value, actions}) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Try Redux</h2>
    </div>
    <div className="App-intro">
      <Counter actions={actions} value={value}/>
    </div>
  </div>
)

// class App extends Component {
//   render() {
//     console.log('App', this.props)
//     // const { value, actions } = this.props;
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Try Redux</h2>
//         </div>
//         <div className="App-intro">
//           <Counter actions={this.props.actions} value={this.props.value}/>
//         </div>
//       </div>
//     );
//   }
// }

const mapStateToProps = state => ({
  value: state.counter
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
