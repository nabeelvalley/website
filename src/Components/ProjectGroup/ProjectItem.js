import React from 'react'
import AnyLink from '../AnyLink/AnyLink'
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
        <p className="link"><AnyLink to={link}>More Info</AnyLink></p>
    </div>
</div >

export default ProjectItem