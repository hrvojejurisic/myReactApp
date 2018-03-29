import React, { Component } from 'react';

// Components
import { Product } from './components';
import { CartProduct } from './components';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            Cart: [],
            CartTotal: 0,
            Currency: 'USD'
        };
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    PRODUCT_LIST = [
    {
        name: 'Bonita Bananas',
        description: 'Long thick-skinned edible fruit that is yellow when ripe. Keep bananas on a fruit dish in the living room at room temperature. If you want the bananas to ripen faster place the bowl in the sun. Like other tropical fruits and tomatoes and bell peppers, never store bananas in the refrigerator. Below 8 degrees Celsius the fruit will decay from the inside. These fruits will not ripen but will turn black in the refrigerator.',
        price: 11.99,
        id: 1,
        qty: 1,
        img: "https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg"
    },
    {
        name: 'Spanish Oranges',
        description: 'Orange trees are the most commonly cultivated fruit trees in the world. Oranges are a popular fruit because of their natural sweetness, wide variety of types and diversity of uses, from juices and marmalades to face masks and candied orange slices.',
        price: 8.99,
        id: 2,
        qty: 1,
        img: "https://jmdgv15kxa018mieg2cibjuu-wpengine.netdna-ssl.com/wp-content/uploads/2015/12/Oragnes.png"
    },
    {
        name: 'Nuts from Brazil',
        description: 'A nut is a fruit composed of an inedible hard shell and a seed, which is generally edible. In general usage, a wide variety of dried seeds are called nuts, but in a botanical context "nut" implies that the shell does not open to release the seed',
        price: 79.49,
        id: 3,
        qty: 1,
        img: "http://thisnzlife.co.nz/wp-content/uploads/2017/05/nuts_to_grow_jpg6.jpg"
    },
    {
        name: 'Andalusian Peach',
        description: 'Peach and nectarines are the same species, even though they are regarded commercially as different fruits. In contrast to peaches, whose fruits present the characteristic fuzz on the skin, nectarines are characterized by the absence of fruit-skin trichomes (fuzz-less fruit).',
        price: 12.99,
        id: 4,
        qty: 1,
        img: "https://goodlucksymbols.com/wp-content/uploads/2016/03/Peach-meaning.jpg"
    }
    ];

    addToCart (id) {
        let item = this.PRODUCT_LIST.find(product => product.id === id);
        let items = this.state.Cart;
        let itemIndex = this.state.Cart.indexOf(item);
        let cartTotal = this.state.CartTotal + item.price;
        
        if (itemIndex !== -1) {
            items[itemIndex].qty += 1;
        } else {
            items.push(item);
        }
        
        this.setState ({
            Cart: items,
            CartTotal: cartTotal
        });
    }

    removeFromCart (id) {
        let item = this.state.Cart.find(product => product.id === id);
        let items = this.state.Cart.filter(product => product.id !== id);

        let cartTotal = this.state.CartTotal - (item.qty * item.price);

        item.qty = 1;

        this.setState ({
            Cart: items,
            CartTotal: cartTotal
        });
        
    }

    render() {
        const products = this.PRODUCT_LIST;

        return (
            <div className="page">
                <header className="header">
                    <h1 className="container">My Homework</h1>
                </header>
                <main className="container">
                    <ul className="product-list">
                        {products.map((product, index) => <Product key={index} {...product} currency={this.state.Currency} onClick={this.addToCart} />)}
                    </ul>
                    <div className="cart">
                        {this.state.Cart.length ? 
                            <ul>
                                {this.state.Cart.map((product, index) => <CartProduct key={index} {...product} onClick={this.removeFromCart}/>)}
                                <li className="totals">Total: {this.state.CartTotal.toFixed(2)} {this.state.Currency}</li>
                            </ul>
                            :
                            <p>Your cart is empty!</p>
                        }
                        
                    </div>
                </main>
            </div>
        );
    }
}

export default Home;
