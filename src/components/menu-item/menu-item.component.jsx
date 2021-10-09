import React from 'react';
import { withRouter } from 'react-router';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl,size, history, linkUrl, match}) => (
    <div 
        style={{backgroundImage: `url(${imageUrl})`}} 
        className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className="content">
            <div className="title">{title}</div>
            <div className="subtitle">Shop Now</div>
        </div>
    </div>
)

export default withRouter(MenuItem);