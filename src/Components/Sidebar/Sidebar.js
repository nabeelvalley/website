import React from 'react'

import './Sidebar.css'

const Sidebar = ({ title, children }) => <div className="Sidebar">
    <div className="title">{title}</div>
    {children}
</div>

export default Sidebar