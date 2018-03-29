import React from 'react';

// Style
import './Product.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        const id = this.props.id;
        this.props.onClick(id);
    }
    render () {
        return(
            <li className="item" dataId={this.props.id}>
                <img src={this.props.img} alt={this.props.name}/>
                <div className="product-info">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.description}</p>
                    <div className="add-to-cart">
                        <p className="price">
                            {this.props.price} {this.props.currency}
                        </p>
                        <button onClick={ this.handleClick } >Add to Cart</button>
                    </div>
                </div>
            </li>
        );
    }
}

export default Product;
