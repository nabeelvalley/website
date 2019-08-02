import React from 'react';
import './Title.css';

const Title = ({ height, width, heading, subheading, date }) => {
    return <div className="Title" style={{ gridColumn: `span ${width}`, gridRow: `span ${height}` }}>
        <h1 className="heading">
            {heading}
        </h1>
        <div className="text">
            by Nabeel Valley
        </div>
        <div className="text hidden-small">
            {subheading}
        </div>
        <div className="text hidden-small">
            {date}
        </div>
    </div>
}

export default Title;