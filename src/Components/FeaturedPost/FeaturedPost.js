import React from 'react'
import { NavLink } from 'react-router-dom'

import './FeaturedPost.css'

const FeaturedPost = ({ image, title, date, synops, link }) => <div className="FeaturedPost grid">
    <img src={image} className="image fill" />
    <div className="text">
        <h2 className="title">{title}</h2>
        <div className="date">{date}</div>
        <p className="synops">{synops}</p>
        <p className="link"><NavLink to={link}>Read More</NavLink></p>
    </div>
</div>

export default FeaturedPost