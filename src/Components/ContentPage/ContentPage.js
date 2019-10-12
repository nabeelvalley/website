import React from 'react'
import { withRouter } from 'react-router-dom'
import SocialIcons from '../SocialIcons/SocialIcons'

import './ContentPage.css'
import Sidebar from '../Sidebar/Sidebar'

const ContentPage = ({ title, subtitle, children, location }) => console.log(location) || <div className="ContentPage">
    <div className="header">
        <h1 className="heading">{title}</h1>
        <p className="subheading">{subtitle}</p>
        <SocialIcons />
    </div>
    <div className="content grid">
        <main className="main">
            {children}
        </main>
        <div className="links">
            {
                location.pathname !== '/blog'
                    ? <Sidebar
                        title="Blog"
                    />
                    : null
            }
            {
                location.pathname !== '/code'
                    ? < Sidebar
                        title="Code"
                    />
                    : null
            }
        </div>
    </div>
</div>

export default withRouter(ContentPage)