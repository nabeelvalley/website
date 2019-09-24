import React from 'react'
import './ProjectGroup.css'

const ProjectGroup = ({ children, isFullWidth = false }) =>
    isFullWidth
        ? <div className="ProjectGroup grid">
            <div className="flex">
                {children}
            </div>
        </div>
        : <div className="ProjectGroup contained">
            <div className="flex">
                {children}
            </div>
        </div>

export default ProjectGroup