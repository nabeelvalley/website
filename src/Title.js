import React from 'react';

const Title = ({ height, width, heading, subheading, date }) => {
    return <div className="Title" style={{ gridColumn: `span ${width}`, gridRow: `span ${height}` }}>
        <h1 className="heading">
            {heading}
        </h1>
        <div className="text">
            by Nabeel Valley
        </div>
        <div className="text">
            {subheading}
        </div>
        <div className="text">
            {date}
        </div>
    </div>
}

export default Title;