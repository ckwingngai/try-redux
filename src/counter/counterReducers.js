const initialState = {
  'counter': 0,
}

const counter = (state = initialState, action) => {
  /*
  With Redux, you never mutate any part of state.
  http://stackoverflow.com/questions/39513753/my-redux-state-has-changed-why-doesnt-react-trigger-a-re-render
  Should return a brand new state instead of mutating the state
  */
  console.log('on reducer', action);
  switch (action.type) {
    case 'INCREMENT':
      console.log('on increment', state.counter+1);
      return { counter: state.counter+1 };
    case 'DECREMENT':
      console.log('on decrement', state.counter-1);
      return { counter: state.counter-1 };
    default:
      return state
  }
}

export default counter
