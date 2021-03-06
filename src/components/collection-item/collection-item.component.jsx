import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../button/custom-button.component';
import {connect} from 'react-redux';
import {addItemToCart} from '../../redux/cart/cart.action';

const CollectionItem = ({item, addItem }) => {
    const {name, price, imageUrl} = item;

    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{backgroundImage: `url(${imageUrl})`}}
                aria-label={name}
                role="img"
            >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton 
                onClick={() => addItem(item)}
                inverted
            >
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item)) 
})
export default connect(
    null,
    mapDispatchToProps)
    (CollectionItem);
