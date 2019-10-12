import React from 'react'
import AnyLink from '../AnyLink/AnyLink';

import './SidebarItem.css'

const SidebarItem = ({ title, date, tech, description, link, linkText = 'Learn More' }) => <div className="SidebarItem">
    <div className="overview">
        <h3 className="title">{title}</h3>
        {
            date
                ? <div className="date">{date}</div>
                : null
        }
        {
            tech
                ? <ul className="tech">
                    {
                        tech.map(el => <li key={el} className="item">{el}</li>)
                    }
                </ul>
                : null
        }
    </div>
    <div className="summary">
        <p className="description">{description}</p>
        <p className="link">
            <AnyLink to={link}>{linkText}</AnyLink>
        </p>
    </div>
</div>

export default SidebarItem