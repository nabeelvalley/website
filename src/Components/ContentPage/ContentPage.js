import React from 'react'
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
            {
                location.pathname !== '/blog'
                    ? <Sidebar title="Blog">
                        <SidebarItem
                            title="The Gatsby Migration, pt.3 - Smart Pages"
                            tech={['React', 'Gatsby', 'GraphQL']}
                            date="15 March 2020"
                            description="Adding dynamic pages to a Gatsby site"
                            link="/blog/2020/15-03/gatsby-migration-3"
                            linkText="Read More"
                        />
                        <SidebarItem
                            title="The Gatsby Migration, pt.2 - Dumb Pages"
                            tech={['React', 'Gatsby', 'GraphQL']}
                            date="01 February 2020"
                            description="Transforming a React site into a statically rendered one? Let's get started"
                            link="/blog/2020/01-02/gatsby-migration-2"
                            linkText="Read More"
                        />
                        <SidebarItem
                            title="The Gatsby Migration, pt.1 - Setting the Scene"
                            tech={['React', 'Gatsby', 'GraphQL']}
                            date="21 January 2020"
                            description="Let's build a react site"
                            link="/blog/2020/21-01/gatsby-migration-1"
                            linkText="Read More"
                        />
                        <SidebarItem
                            title="Real-time Communication with MQTT"
                            tech={['JS', 'MQTT', 'WS', 'Mosquitto']}
                            date="12 November 2019"
                            description="MQTT and real-time communication with the browser, JavaScript, Web Sockets and a Mosquitto message broker"
                            link="/blog/2019/12-11/rtc-with-mqtt"
                            linkText="Read More"
                        />
                    </Sidebar>
                    : null
            }
            {
                location.pathname !== '/code'
                    ? <Sidebar title="Code">
                        <SidebarItem
                            title="Docs"
                            tech={['literally everything']}
                            description="Documentation and notes on pretty much everything programming and software development related"
                            link="/docs"
                            linkText="View Docs"
                        />
                        <SidebarItem
                            title="Rak'ah"
                            tech={['svelte', 'js', 'netlify']}
                            description="Information on the number of Rak'ah for different Salaat. Essentially a fork of 'Form and Structure' with different content"
                            link="https://rakah.netlify.com"
                            linkText="Go to Site"
                        />
                    </Sidebar>
                    : null
            }
        </div>
    </div>
</div>

export default ContentPage