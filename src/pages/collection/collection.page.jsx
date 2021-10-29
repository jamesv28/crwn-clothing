import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

class CollectionsPage extends Component {
    componentDidMount() {
        document.title = "Crown Clothes | Collections"
    }

    render() {

        const {match, collection} = this.props;
        console.log('collection', collection);
        return (
            <div className="category">
                <h2>Collection Page</h2>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CollectionsPage);