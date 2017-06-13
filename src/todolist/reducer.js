import R from 'ramda'

const todoInitialState = {
  'todolist': [{
    id: 0,
    text: 'Please add some here!',
    done: false
  }],
}

const todolist = (state = todoInitialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const getId = (obj) => { return obj.id }
      const idList = R.map(getId)(state.todolist)
      const maxId = R.reduce(R.max, 0, idList)
      return {
        todolist: [
          {
            id: maxId+1,
            text: action.payload.text,
            done: false
          },
          ...state.todolist
        ]
      };
    case 'DELETE_TODO':
      return {
        todolist: R.filter(x => x.id !== action.payload.id)(state.todolist)
      };
    case 'DONE_TODO':
      return {
        todolist: R.map(x => x.id === action.payload.id
          ? { ...x, done: !x.done } : x
        )(state.todolist)
      };
    default:
      return state;
  }
}

export default todolist
