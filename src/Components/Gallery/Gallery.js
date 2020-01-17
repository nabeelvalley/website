import React from 'react'
import './Gallery.css'

const Gallery = ({ items, baseHeight, styles }) => {
    return <div style={styles} className="Gallery">
        {
            items
        }
    </div>
}

export default Gallery