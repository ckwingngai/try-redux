import R from 'ramda'

const cartInitialState = {
  'cartlist': [{
    id: 0,
    text: 'Let\'s add something to the cart'
  }],
}

const cartlist = (state = cartInitialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const getId = (obj) => { return obj.id }
      const idList = R.map(getId)(state.cartlist)
      const maxId = R.reduce(R.max, 0, idList)
      return {
        cartlist: [
          {
            id: maxId+1,
            text: action.payload.text,
          },
          ...state.cartlist
        ]
      };
    case 'REMOVE_CART':
      return {
        cartlist: R.filter(x => x.id !== action.payload.id)(state.cartlist)
      }
    default:
      return state;
  }
}

export default cartlist
