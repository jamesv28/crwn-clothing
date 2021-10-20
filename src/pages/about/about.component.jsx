import React, { Component } from 'react';

import './about.styles.scss';

class AboutPage extends Component {
    componentDidMount() {
        document.title = "Crown Clothes | About";
    }

    render() {
        return (
            <div className="store">
                <img src="../../assets/store.jpg" alt="" />
                <h1>About Crown Clothes</h1>
            </div>
        )
    }
}

export default AboutPage;