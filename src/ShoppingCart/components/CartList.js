import React, { Component } from 'react';
import R from 'ramda';

export default class CartList extends Component {
  constructor(props) {
    super(props)

    this.onRemove = this.onRemove.bind(this);
  }
  getCartList() {
    return R.map((item) => {
      return (
        <li key={item.id}>{item.text} ({item.quantity})<button onClick={() => this.onRemove(item)}>X</button></li>
      )
    })(this.props.cartlist)
  }
  onRemove(item) {
    this.props.removeCart({item});
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Cart list</h2>
        <ul>
          {this.getCartList()}
        </ul>
      </div>
    );
  }
}
