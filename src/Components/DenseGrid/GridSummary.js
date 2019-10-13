import React from 'react'
import AnyLink from '../AnyLink/AnyLink'

import './GridSummary.css'

const GridSummary = ({ title, date, description, link, gridColumn = "span 4", gridRow = "span 2", linkText = "Read More" }) => <div className="GridSummary" style={{ gridColumn, gridRow }}>
    <h2 className="title">{title}</h2>
    <div className="date">{date}</div>
    <p className="description">{description}</p>
    <p className="link"><AnyLink to={link}>{linkText}</AnyLink></p>
</div>

export default GridSummary