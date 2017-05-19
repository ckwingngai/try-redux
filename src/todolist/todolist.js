import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'
import * as TodolistActions from './todolistActions';

class Todolist extends Component {
  constructor(props) {
    super(props)

    this.state = {todoText: ''};
    this.handleChange = this.handleChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  getItem(todolist) {
    console.log('getItem')
    return R.map((todoitem) => {
      return (
        <li key={todoitem.id}>{ todoitem.text }</li>
      );
    })(todolist)
  }
  onAdd(e) {
    console.log('onAdd', {text: this.state.todoText})
    this.props.actions.addTodo({text: this.state.todoText})
    this.setState({ todoText: '' })
  }
  handleChange(event) {
    console.log('handleChange')
    this.setState({ todoText: event.target.value });
  }
  render() {
    console.log('render Todolist', this.props);
    const { payload, actions } = this.props;
    console.log(payload.todolist[0])
    return (
      <div>
        <h2>Todolist</h2>
        <input type="text" value={this.state.todoText} onChange={this.handleChange} />
        <button onClick={ this.onAdd }>Add</button>
        <ul>
          { this.getItem(payload.todolist) }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.todolist
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodolistActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
