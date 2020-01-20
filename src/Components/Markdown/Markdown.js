import React from 'react'

import './Markdown.css'

const Markdown = ({ children, html }) =>
    children
        ? <div className="Markdown">{children}</div>
        : <div className="Markdown" dangerouslySetInnerHTML={{ __html: html }}></div>

export default Markdown