import React, { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

class ShopPage extends Component {

    componentDidMount() {
        document.title = "Crown Clothes | Shop";
    }

    render() { 
        return (
            <div className="shop-page">
                <CollectionsOverview />
            </div>
        )
    }
}


export default ShopPage;