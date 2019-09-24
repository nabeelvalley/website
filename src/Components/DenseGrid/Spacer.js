import React from 'react'

import './GridImage.css'

const GridImage = ({ gridColumn = 'span 1', gridRow = 'span 1' }) =>
    <img
        className="GridImage fill"
        src={image}
        alt={alt}
        style={{ gridColumn, gridRow }}
    />

export default GridImage