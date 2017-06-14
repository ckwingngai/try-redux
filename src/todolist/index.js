import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import R from 'ramda'
import * as actions from './actions';

class Todolist extends Component {
  constructor(props) {
    super(props)

    this.state = {todoText: ''};
    this.handleChange = this.handleChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  getItem(todolist) {
    const getitemStyle = (todoitem) => {
      if (todoitem.done === true) {
        return {textDecoration: 'line-through'}
      }
      return {}
    }
    return R.map((todoitem) => {
      return (
        <li style={getitemStyle(todoitem)} key={todoitem.id}><input type="checkbox" onChange={() => this.onDone(todoitem.id)}/>{ todoitem.text }<button onClick={() => this.onDelete(todoitem.id)}>X</button></li>
      );
    })(todolist)
  }
  onAdd(e) {
    this.props.actions.addTodo({text: this.state.todoText})
    this.setState({ todoText: '' })
  }
  onDelete(id) {
    this.props.actions.deleteTodo({ id });
  }
  onDone(id) {
    this.props.actions.doneTodo({ id });
  }
  handleChange(event) {
    this.setState({ todoText: event.target.value });
  }
  render() {
    console.log(this.props);
    const { payload } = this.props;
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
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
