import React from 'react'
import './cart-icon.styles.scss';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = () => (
    <div className="cart-icon">
        <ShoppingIcon className="cart-icon">
            <span className="item-count">0</span>
        </ShoppingIcon>
    </div>
)

export default CartIcon;