import R from 'ramda'

const todoInitialState = {
  'todolist': [{
    id: 0,
    text: 'Please add some here!'
  }],
}

const todolist = (state = todoInitialState, action) => {
  console.log('on reducer', action);
  switch (action.type) {
    case 'ADD_TODO':
      console.log('on add reducer');
      const getId = (obj) => { return obj.id }
      const idList = R.map(getId)(state.todolist)
      const maxId = R.reduce(R.max, 0, idList)
      return {
        todolist: [
          {
            id: maxId+1,
            text: action.payload.text
          },
          ...state.todolist
        ]
      };
    case 'DELETE_TODO':
      console.log('on delete reducer', action.payload.id)
      console.log(state.todolist)
      // return state;
      return {
        todolist: state.todolist.filter(x => x.id !== action.payload.id)
      };
      // return R.filter(x => x.id !== action.payload.id)(state.todolist);
    default:
      return state;
  }
}

export default todolist
