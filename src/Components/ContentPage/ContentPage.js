import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'

import './ContentPage.css'
import Sidebar from '../Sidebar/Sidebar'
import SidebarItem from '../Sidebar/SidebarItem'

const ContentPage = ({ title, subtitle, children }) => <div className="ContentPage">
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
                window.location.pathname !== '/blog'
                    ? <Sidebar title="Blog">
                        <SidebarItem
                            title="Real-time Communication with MQTT"
                            tech={['JS', 'MQTT', 'WS', 'Mosquitto']}
                            date="12 November 2019"
                            description="MQTT and real-time communication with the browser, JavaScript, Web Sockets and a Mosquitto message broker"
                            link="/blog/2019/12-11/rtc-with-mqtt"
                            linkText="Read More"
                        />
                        <SidebarItem
                            title="Introduction to F# Web APIs"
                            tech={['F#', '.NET Core', 'APIs']}
                            date="30 October 2019"
                            description="The basics of building a Web API with .NET Core and F#"
                            link="/blog/2019/30-10/fsharp-webapi"
                            linkText="Read More"
                        />
                        <SidebarItem
                            title="Looky, a wild HTML!"
                            date="13 October 2019"
                            description="The first blog post, A quick journey through my design and development process"
                            link="/blog/2019/12-10/looky-a-wild-html"
                            linkText="Read More"
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
                window.location.pathname !== '/code'
                    ? <Sidebar title="Code">

                        <SidebarItem
                            title="Docs"
                            tech={['literally everything']}
                            description="Documentation and notes on pretty much everything programming and software development related"
                            link="/docs/index"
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