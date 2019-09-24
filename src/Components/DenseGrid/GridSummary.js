import React from 'react'
import { NavLink } from 'react-router-dom'

import './GridSummary.css'

const GridSummary = ({ title, date, synops, link, gridColumn = "span 4", gridRow = "span 2" }) => <div className="GridSummary" style={{ gridColumn, gridRow }}>
    <h2 className="title">{title}</h2>
    <div className="date">{date}</div>
    <p className="synops">{synops}</p>
    <p className="link"><NavLink to={link}>Read More</NavLink></p>
</div>

export default GridSummary