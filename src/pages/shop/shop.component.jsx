import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CollectionsPage from '../collection/collection.page';
import {connect} from 'react-redux';
import {fetchCollectionStartAsync} from '../../redux/shop/shop.actions';
import {createStructuredSelector} from 'reselect';
import Spinner from '../../components/spinner/spinner.component';
import {selectCollectionIsFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const CollectionOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionsPage);

class ShopPage extends Component {


    componentDidMount() {
        document.title = "Crown Clothes | Shop";
        const {fetchCollectionStartAsync} = this.props;

        fetchCollectionStartAsync();
    }

    render() { 
        const {match, isCollectionFetching, isCollectionLoaded} = this.props;
        return (
            <div className="shop-page">
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props)=> (<CollectionOverviewWithSpinner isLoading={isCollectionFetching} 
                    {...props} 
                    />
                )} 
                />
                <Route 
                    path={`${match.path}/:categoryId`} 
                    render={(props) => (
                        <CollectionPageWithSpinner 
                            isLoading={!isCollectionLoaded} 
                            {...props} 
                        />
                    )}
                />
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionIsFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ShopPage);