import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CollectionsPage from '../collection/collection.page';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {
    firestore, 
    convertCollectionSnapshotToMap
    } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionsPage);

class ShopPage extends Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        document.title = "Crown Clothes | Shop";

        const {updateCollections} = this.props;

        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({
                loading: false
            })
        })
    }

    render() { 
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props)=> (<CollectionOverviewWithSpinner isLoading={loading} 
                    {...props} />)} 
                />
                <Route 
                    path={`${match.path}/:categoryId`} 
                    render={(props) => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);