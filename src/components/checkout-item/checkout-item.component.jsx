import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, addItemToCart, removeItem} from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, quantity, price } = cartItem;
    return (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name} />
        </div>
        <span className="name">
            {name}
        </span>
        <span className="quantity">
            <button 
                aria-label="Less"
                className="arrow" 
                onClick={() => removeItem(cartItem)}
            >&#10094;</button>
            <span className="value">{quantity}</span>
            <button 
                aria-label="More"
                className="arrow"
                onClick={() => addItem(cartItem)}
            >&#10095;</button>
        </span>
        <span className="price">
            {price}
        </span>
        <div >
            <button 
                className="remove-button" 
                onClick={() => clearItem(cartItem)}
                aria-label="Remove"
            >
                &#10005;
            </button>
        </div>
    </div>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);