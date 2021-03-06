import React, { Component } from 'react';
import R from 'ramda';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import CartList from './components/CartList.js';

class ShoppingCart extends Component {
  constructor(props) {
    super(props)

    this.state = {cartText: ''};
    this.onAdd = this.onAdd.bind(this);
  }
  componentWillMount() {
    // console.log('componentWillMount()', this.props);
  }
  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps()', this.props);
  }
  getProduct() {
    return R.map((product) => {
      return (
        <li key={product.id}>{product.title} - {product.price} ({product.inventory})
          <button onClick={() => this.onAdd(product)}>Add to Cart</button>
        </li>
      )
    })(this.props.payload.products)
  }
  onAdd(product) {
    console.log('onAdd', this.props);
    this.props.actions.addCart({product: product});
  }
  render() {
    console.log(this.props);
    const { payload, actions } = this.props;
    return (
      <div>
        <h2>Shopping Carts</h2>
        <ul>
          {this.getProduct()}
        </ul>
        <CartList {...payload} {...actions} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  payload: state.cartlist
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
