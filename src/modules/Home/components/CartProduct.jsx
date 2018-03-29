import React from 'react';

// Style
import './CartProduct.css';

class CartProduct extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
      const id = this.props.id;
      this.props.onClick(id);
  }
  render () {
      return(
          <li className="cart-item" dataId={this.props.id}>
              <img src={this.props.img} alt={this.props.name}/>
              <div className="product-info">
                <p><strong>{this.props.name}</strong></p>
                <p className="cart-item-price">
                {this.props.qty} x {this.props.price}{this.props.currency}
                </p>
                <button onClick={ this.handleClick } >x</button>
              </div>
          </li>
      );
  }
}
export default CartProduct;
