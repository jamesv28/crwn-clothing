import React, { Component } from 'react';
import './not-found.styles.scss';

class NotFound extends Component{

    componentDidMount() {
        document.title = "Crown Clothes | Page Not Found";
    }

    render() {
        return (
            <div className="not-found">
                <h1>Oops - There was a problem</h1>
                <p>This page seems to not exist</p>
            </div>
        )
    }
}

export default NotFound;