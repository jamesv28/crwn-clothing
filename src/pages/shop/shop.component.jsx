import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import CollectionsPage from '../collection/collection.page';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

class ShopPage extends Component {

    componentDidMount() {
        document.title = "Crown Clothes | Shop";
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


export default ShopPage;