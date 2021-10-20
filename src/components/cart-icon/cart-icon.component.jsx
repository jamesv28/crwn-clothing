import React from 'react'
import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <button 
        className="cart-icon" 
        onClick={toggleCartHidden} 
        aria-label="Cart items" 
        id="shopping-cart"
    >
        <ShoppingIcon className="cart-icon" />
            <span className="item-count" aria-describedby="shopping-cart">
                {itemCount}
            </span>
    </button>
)
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartIcon);