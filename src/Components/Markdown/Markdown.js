import React from 'react'

import './Markdown.css'

const Markdown = ({ html }) => <div className="Markdown" dangerouslySetInnerHTML={{ __html: html }}></div>

export default Markdown