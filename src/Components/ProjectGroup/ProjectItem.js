import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectItem.css'

const ProjectItem = ({ title, tech, description, link }) => <div className="ProjectItem">
    <div className="overview">
        <h3 className="title">{title}</h3>
        <ul className="tech">
            {
                tech.map(el => <li key={el} className="item">{el}</li>)
            }
        </ul>
    </div>
    <div className="summary">
        <p className="description">{description}</p>
        <p className="link"><NavLink to={link}>More Info</NavLink></p>
    </div>
</div >

export default ProjectItem