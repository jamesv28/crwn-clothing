import React from 'react'
import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden}) => (
    <button 
        className="cart-icon" 
        onClick={toggleCartHidden} 
        aria-label="Cart items" 
        id="shopping-cart"
    >
        <ShoppingIcon className="cart-icon" />
            <span className="item-count" aria-describedby="shopping-cart">0</span>
    </button>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);