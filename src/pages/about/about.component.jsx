import React, { Component } from 'react';
import logo from '../../assets/store.jpg';
import './about.styles.scss';

class AboutPage extends Component {
    componentDidMount() {
        document.title = "Crown Clothes | About";
    }

    render() {
        return (
            <div className="store">
                <img src={logo} alt="shopping store" />
                <h1 style={{textAlign: 'center'}}>About Crown Clothes</h1>
                <p>Being based at the foot of the Rocky Mountains in Denver Colorado, outdoor influences are apparent in the quality and integrity of our garments. We own and operate our own boutique in Denver which exclusively carries <strong>Crown Clothes</strong> products and collaborations.</p>
                <p> As we have grown in the years since and widened our product range the brand has garnered attention from a larger audience for craftsmanship, attention to detail, and unique design.</p>
                <p style={{marginBottom: '80px'}}>Our branding activities are focused around the unique
                    media content showcasing our product. We have pushed professional level photography and video through grassroots efforts that are built around our events/parties and spread through social media channels which has reached hundreds of thousands of advocates.</p>
            </div>
        )
    }
}

export default AboutPage;