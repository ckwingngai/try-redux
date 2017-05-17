const initialState = {
  'counter': 0,
}

const counter = (state = initialState, action) => {
  console.log('on reducer', action);
  switch (action.type) {
    case 'INCREMENT':
      state.counter ++
      console.log('on increment', state);
      return state
    case 'DECREMENT':
      state.counter --
      console.log('on decrement', state);
      return state
    default:
      return state
  }
}

export default counter
