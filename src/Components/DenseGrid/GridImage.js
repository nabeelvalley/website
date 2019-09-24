import React from 'react'

import './GridImage.css'

const GridImage = ({ image, alt, gridColumn, gridRow, useAutoHeight }) =>
    <img
        className="GridImage fill"
        src={image}
        alt={alt}
        style={{ gridColumn, gridRow, height: useAutoHeight ? 'auto' : null }}
    />

export default GridImage