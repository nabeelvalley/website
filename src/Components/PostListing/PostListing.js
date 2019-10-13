import React from 'react'
import AnyLink from '../AnyLink/AnyLink'

import './PostListing.css'

const PostListing = ({ image, title, date, description, link, textAlignRight = false, linkText = "Read More" }) =>
    <div className={'PostListing grid text-' + (textAlignRight === true ? 'right' : 'left')}>
        <img src={image} className="image fill" alt="" />
        <div className="text">
            <h2 className="title">{title}</h2>
            <div className="date">{date}</div>
            <p className="description">{description}</p>
            <p className="link"><AnyLink to={link}>{linkText}</AnyLink></p>
        </div>
    </div>

export default PostListing