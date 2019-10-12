import React from 'react'
import { withRouter } from 'react-router-dom'
import SocialIcons from '../SocialIcons/SocialIcons'

import './ContentPage.css'
import Sidebar from '../Sidebar/Sidebar'
import SidebarItem from '../Sidebar/SidebarItem'

const ContentPage = ({ title, subtitle, children, location }) => <div className="ContentPage">
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
            <Sidebar title="Posts">
                <SidebarItem
                    title="External link an all fields"
                    date="date"
                    description="hello here is some words that can be a descriprion blah blah you know"
                    tech={['react', 'markdown', 'css']}
                    link="https://www.github.com/nabeelvalley"
                />
                <SidebarItem
                    title="External Project Link"
                    description="hello here is some words that can be a descriprion blah blah you know"
                    tech={['react', 'markdown', 'css']}
                    link="https://www.github.com/nabeelvalley"
                />
                <SidebarItem
                    title="Internal Post Link"
                    date="22 October 2019"
                    description="hello here is some words that can be a descriprion blah blah you know"
                    link="/blog/testPost"
                />
            </Sidebar>
        </div>
    </div>
</div>

export default withRouter(ContentPage)