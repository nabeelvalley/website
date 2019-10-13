import React from 'react'
import { withRouter } from 'react-router-dom'
import SocialIcons from '../SocialIcons/SocialIcons'

import './ContentPage.css'
import Sidebar from '../Sidebar/Sidebar'
import SidebarItem from '../Sidebar/SidebarItem'

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
                    ? <Sidebar title="Blog">
                        <SidebarItem
                            title="Looky, a wild HTML!"
                            date="13 October 2019"
                            description="The first blog post, A quick journey through my design and development process"
                            link="/blog/2019/12-10/looky-a-wild-html"
                        />
                        <SidebarItem
                            title="Zwartkops Gallery"
                            date="27 July 2019"
                            description="A photo gallery of the Extreme Racing Festival at Zwartkops Raceway in Centurion"
                            link="/gallery/zwartkops"
                            linkText="View Gallery"
                        />
                    </Sidebar>
                    : null
            }
            {
                location.pathname !== '/code'
                    ? <Sidebar title="Code">
                        <SidebarItem
                            title="Form and Structure"
                            tech={['svelte', 'js', 'netlify']}
                            description="Website about Poetic Form and Structure built with Svelte, one of those 'always-a-work-in-progress' kind of things"
                            link="https://formandstructure.netlify.com"
                            linkText="Go to Site"
                        />
                        <SidebarItem
                            title="Salaah Times"
                            tech={['react', 'strapi', 'docker', 'mongo-db']}
                            description="Web App to enable Masaajid to manage and publish their Salaah Times for a given area. Built with StrapiCMS, Mongo and React and an unnecessarily complicated Docker build"
                            link="https://github.com/nabeelvalley/SalaahTimesApp"
                            linkText="Go to GitHub"
                        />
                    </Sidebar>
                    : null
            }
        </div>
    </div>
</div>

export default withRouter(ContentPage)