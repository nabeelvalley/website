import React from 'react'
import AnyLink from '../AnyLink/AnyLink'
import Img from 'gatsby-image'
import { getImageSources } from "../Helpers/imageQueryBuilder"

import './PostListing.css'

const PostListing = ({ imageSources, image, title, date, description, link, textAlignRight = false, linkText = "Read More" }) =>
    <div className={'PostListing grid text-' + (textAlignRight === true ? 'right' : 'left')}>
        {
            imageSources
                ? <Img fluid={getImageSources(imageSources)} className="image fill" alt="" loading="lazy" />
                : <img src={image} className="image fill" alt="" loading="lazy" />
        }
        <div className="text">
            <h2 className="title">{title}</h2>
            <div className="date">{date}</div>
            <p className="description">{description}</p>
            <p className="link"><AnyLink to={link}>{linkText}</AnyLink></p>
        </div>
    </div>

export default PostListing