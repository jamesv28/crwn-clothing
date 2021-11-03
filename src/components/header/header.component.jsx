import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';

import {Link} from  'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selectors';

const Header = ({currentUser,hidden}) => (
    <header>
        <HeaderContainer>
            <LogoContainer to="/" >
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop" className="option">SHOP</OptionLink>
                <OptionLink to="/shop" className="option">CONTACT</OptionLink>
                {currentUser ? 
                    <OptionLink onClick={() => auth.signOut()}>Sign Out </OptionLink> 
                    :
                    <OptionLink to='/signin'>Sign In </OptionLink>
                }
                <CartIcon />
            </OptionsContainer>
        </HeaderContainer>
        { hidden ? null :
            <CartDropdown />
        }
    </header>
)
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);