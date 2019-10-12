import React from 'react'
import { NavLink } from 'react-router-dom'

import './PostListing.css'

const PostListing = ({ image, title, date, synops, link, textAlignRight = false }) => 
<div className={'PostListing grid text-' + (textAlignRight === true ? 'right' : 'left')}>
    <img src={image} className="image fill" />
    <div className="text">
        <h2 className="title">{title}</h2>
        <div className="date">{date}</div>
        <p className="synops">{synops}</p>
        <p className="link"><NavLink to={link}>Read More</NavLink></p>
    </div>
</div>

export default PostListing