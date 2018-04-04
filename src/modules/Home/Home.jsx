import React, { Component } from 'react';
// Components
import { Product } from './components';
import { CartProduct } from './components';
// Utils
import { formatPrice } from 'utils';
// Actions
import { getProducts, getCart, setEmptyCart, generateCartId, addToCart, removeFromCart } from './actions';

class Home extends Component {

    state = {
        Products: [],
        CartProducts: [],
        CartTotal: 0,
        CartQty: 0,
        Currency: 'USD',
        isLoading: true
    }

    componentDidMount() {
        
        getProducts().then(json => {
            this.setState({
                Products: json.items,
                isLoading: false
            });
        });

        this.cartId = localStorage.getItem('cartId');

         //cart exists 
        if(this.cartId) {
            getCart(this.cartId).then(json => {
                let cartQty = 0;
                json.items.forEach(
                    item => (cartQty += item.quantity)
                );
                this.setState({
                    CartProducts: json.items,
                    CartTotal: json.totals.items,
                    Currency: json.currency,
                    CartQty: cartQty
                });
            });
        //create new cart
        } else {
            const cartId = generateCartId();
            setEmptyCart(cartId);
            localStorage.setItem('cartId', cartId);
            this.cartId = cartId;
        }

    }

    handleAddToCart = event => { 
        const id = event.target.value;
    
        let cartQty = 0;

        //let item = this.state.Products.find(product => product.code === id);
        //let items = this.state.Cart;
        ///let itemIndex = this.state.Cart.indexOf(item);

        addToCart(this.cartId, id).then(json => {
            console.log(json);
            json.items.forEach(
                item => (cartQty += item.quantity)
            );
            this.setState({
                CartProducts: json.items,
                CartTotal: json.totals.items,
                Currency: json.currency,
                CartQty: cartQty
            });
        }).then(this.openCart);
       
    };

    handleRemoveFromCart = event => {
        
        const id = event.target.value;

        let cartQty = 0;

        removeFromCart(this.cartId, id).then(json => {
            json.items.forEach(
                item => (cartQty += item.quantity)
            );
            this.setState({
                CartProducts: json.items,
                CartTotal: json.totals.items,
                Currency: json.currency,
                CartQty: cartQty
            });
        });
        
    }

    openCart = () => {
        document.getElementById("root").classList.toggle("cart-opened");
    }

    render() {
        //const products = this.PRODUCT_LIST;

        return (
            <div className="page">
                <header className="header">
                    <div className="container">
                        <h1 className="logo">My Homework</h1>
                        <button className="minicart" onClick={this.openCart} ><span className="icon-cart"></span><span className="cart-qty">{this.state.CartQty}</span></button>
                    </div>
                </header>
                <main className="container main-content">
                    <ul className="product-list">
                        {this.state.Products.map((product, index) => <Product key={index} {...product} currency={this.state.Currency} addToCartCallback={this.handleAddToCart} />)}
                    </ul>
                </main>
                <aside id="cart" className="cart">
                    {this.state.CartProducts.length ? 
                        <div className="cart-container">
                            <button className="minicart close-cart" onClick={this.openCart} ><span className="icon-close"></span></button> 
                            <ul>
                                {this.state.CartProducts.map((product, index) => <CartProduct key={index} {...product} currency={this.state.Currency} removeFromCartCallback={this.handleRemoveFromCart}/>)}
                                <li className="totals">Total: {formatPrice(this.state.CartTotal)} {this.state.Currency}</li>
                            </ul>
                        </div>
                        :
                        <div className="cart-container">
                            <button className="minicart close-cart" onClick={this.openCart} ><span className="icon-close"></span></button> 
                            <p className="cart-container empty-cart">Your cart is empty!</p>
                            <span className="icon-remove-cart"></span>
                        </div>
                    } 
                </aside>
            </div>
        );
    }
}

export default Home;
