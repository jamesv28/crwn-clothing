import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CollectionsPage from '../collection/collection.page';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {
    firestore, 
    convertCollectionSnapshotToMap
    } from '../../firebase/firebase.utils';

class ShopPage extends Component {

    componentDidMount() {
        document.title = "Crown Clothes | Shop";

        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        })
    }

    unsubscribeFromSnapshot = () => {

    }

    render() { 
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:categoryId`} component={CollectionsPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);