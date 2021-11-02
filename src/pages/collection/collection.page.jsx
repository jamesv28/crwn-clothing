import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

class CollectionsPage extends Component {
    
    componentDidMount() {
        document.title = "Crown Clothes | Collections";
    }

    render() {

        const {collection} = this.props;
        const {title, items} = collection;
        return (
            <div className="collection-page">
                <h2 className="title">{title}</h2>
                <div className="items">
                    {
                        items.map(item => <CollectionItem 
                                            key={item.id} 
                                            item={item} 
                                            />)
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CollectionsPage);