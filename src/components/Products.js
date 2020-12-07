import React, { Component } from 'react';
import Currency from "../currencyFormat";
import Fade from "react-reveal/Flip";

export default class Products extends Component {
    render() {
        return (
            <div>
                <Fade bottom cascade>
                <ul className="products">
                    {this.props.products.map((product)=>(
                    <li key={product._id}>
                     <div className="product">
                            <a href={'#' + product.id}>
                                <img src={product.image} alt={product.title}></img>
                                <p>{product.title}</p>
                            </a>
                            <div className="price">
                            <div>{Currency(product.price)}</div>
                            <button onClick={() => this.props.addToCart(product)} className="button-primary">Add To Cart</button>
                            </div>
                      </div>
                    </li>
                    ))}
                </ul>
                </Fade>
            </div>
        );
    } 
}
