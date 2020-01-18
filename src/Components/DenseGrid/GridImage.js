import React from 'react'
import Img from 'gatsby-image'
import { getImageSources } from "../Helpers/imageQueryBuilder"

import './GridImage.css'

const GridImage = ({ imageSources, image, alt, gridColumn, gridRow, useAutoHeight }) =>
    imageSources
        ? <Img
            fluid={getImageSources(imageSources)}
            className="GridImage fill"
            alt={alt}
            style={{ gridColumn, gridRow, height: useAutoHeight ? 'auto' : null }}
            loading="lazy"
        />
        : <img
            className="GridImage fill"
            src={image}
            alt={alt}
            style={{ gridColumn, gridRow, height: useAutoHeight ? 'auto' : null }}
            loading="lazy"
        />

export default GridImage