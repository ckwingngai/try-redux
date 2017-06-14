import R from 'ramda'
import products from '../api/products.json';

const cartInitialState = {
  products,
  'cartlist': [{
    id: 0,
    text: 'Let\'s add something to the cart',
    productId: 0,
    quantity: 1
  }],
}

const cartlist = (state = cartInitialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const getId = (obj) => { return obj.id }
      const idList = R.map(getId)(state.cartlist)
      const maxId = R.reduce(R.max, 0, idList)

      let addCartlist = []
      if (R.find(R.propEq('productId', action.payload.product.id))(state.cartlist)) {
        addCartlist = R.map(x => {
          if (x.productId===action.payload.product.id) {
            x.quantity++
          }
          return x
        })(state.cartlist)
      } else {
        addCartlist = [
          {
            id: maxId+1,
            text: action.payload.product.title,
            productId: action.payload.product.id,
            quantity: 1
          },
          ...state.cartlist
        ]
      }

      return {
        products: R.map(x => {
          if (x.id===action.payload.product.id) {
            x.inventory--
          }
          return x
        })(state.products),
        cartlist: addCartlist
      };
    case 'REMOVE_CART':
      let rmCartlist = R.map(x => {
        if (x.id===action.payload.item.id && x.productId===action.payload.item.productId) {
          x.quantity--
        }
        return x
      })(state.cartlist)
      rmCartlist = R.filter(x => x.quantity!==0)(rmCartlist)
      console.log('state.cartlist', state.cartlist)
      console.log('rmCartlist', rmCartlist)
      return {
        products: R.map(x => {
          if (x.id===action.payload.item.productId) {
            x.inventory++
          }
          return x
        })(state.products),
        cartlist: rmCartlist
      }
    default:
      return state;
  }
}

export default cartlist
