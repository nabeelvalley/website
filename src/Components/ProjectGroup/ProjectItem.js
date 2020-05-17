import React from 'react'
import AnyLink from '../AnyLink/AnyLink'
import './ProjectItem.css'

const ProjectItem = ({ title, subtitle, tech, description, link, linkText = "More Info" }) => <div className="ProjectItem">
  <div className="overview">
    <h3 className="title">{title}</h3>
    {

      tech ?
        <ul className="tech">
          {
            tech.map(el => <li key={el} className="item">{el}</li>)
          }
        </ul>
        : null
    }
  </div>
  <div className="summary">
    {
      subtitle ?
        <p className="subtitle">{subtitle}</p>
        : null
    }
    <p className="description">{description}</p>
    <p className="link"><AnyLink to={link}>{linkText}</AnyLink></p>
  </div>
</div >

export default ProjectItem