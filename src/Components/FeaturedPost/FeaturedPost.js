import React from 'react'
import AnyLink from '../AnyLink/AnyLink'
import Img from 'gatsby-image'
import { getImageSources } from "../Helpers/imageQueryBuilder"

import './FeaturedPost.css'

const FeaturedPost = ({ imageSources, image, title, date, description, link }) => <div className="FeaturedPost grid">
    {
        imageSources
            ? <Img fluid={getImageSources(imageSources)} className="image fill" alt="" />
            : <img src={image} className="image fill" alt="" />
    }
    <div className="text">
        <h2 className="title">{title}</h2>
        <div className="date">{date}</div>
        <p className="description">{description}</p>
        <p className="link"><AnyLink to={link}>Read More</AnyLink></p>
    </div>
</div>

export default FeaturedPost