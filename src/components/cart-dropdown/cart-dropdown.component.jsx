import React from 'react';
import CustomButton from '../button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems,history, dispatch}) => (
    <div className="cart-dropdown" id="cart">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem} />)
                    : 
                    <span className="empty-message">Your cart is empty</span>
            }
            <CustomButton 
                onClick={() => { 
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}>Go to Checkout </CustomButton>
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));