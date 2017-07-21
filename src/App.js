import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyModal from './MyModal';
import MonthIndicators from './MonthIndicators';
import Counter from './Counter';
import Todolist from './TodoList';
import ShoppingCart from './ShoppingCart';

export default class App extends Component {
  render() {
    const { value, actions } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Try Redux</h2>
        </div>
        <div className="App-intro">
          <MyModal />
          <MonthIndicators data="1:111111000000,2:111111111111" />
          <Counter actions={actions} value={value}/>
          <Todolist />
          <ShoppingCart />
        </div>
      </div>
    );
  }
}
