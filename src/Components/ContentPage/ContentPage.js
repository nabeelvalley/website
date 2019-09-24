import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'

import './ContentPage.css'
import Sidebar from '../Sidebar/Sidebar'

const ContentPage = ({ title, subtitle }) => <div className="ContentPage">
    <div className="header">
        <h1 className="heading">{title}</h1>
        <p className="subheading">{subtitle}</p>
        <SocialIcons />
    </div>
    <div className="content grid">
        <Sidebar
            title="Blog"
        />
    </div>
</div>

export default ContentPage