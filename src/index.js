import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import Counter from './counter/counter';
import Todolist from './todolist/todolist';
import rootReducer from './rootReducer'
import './index.css';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/counter" component={Counter} />
        <Route path="/todolist" component={Todolist} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
