import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'

import './ContentPage.css'
import Sidebar from '../Sidebar/Sidebar'
import SidebarItem from '../Sidebar/SidebarItem'
import sortMarkdownPosts from '../../../utils/sortMarkdownPosts'
import { graphql, useStaticQuery } from 'gatsby'

const ContentPage = ({ title, subtitle, children, location }) => {

  const data = useStaticQuery(graphql`{
    allRenderedMarkdownPost(filter: { slug: { regex: "/blog/" } }) {
      edges {
        node {
          slug
          title
          subtitle
          description
        }
      }
    }
  }`)

  const sortedPosts = sortMarkdownPosts(data.allRenderedMarkdownPost)
    .map(p => p.node)
    .reverse()

  return <div className="ContentPage">
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
              {
                sortedPosts.slice(0, 3).map((p, i) =>
                  <SidebarItem
                    title={p.title}
                    date={p.subtitle}
                    description={p.description}
                    link={p.slug}
                    linkText="Read More"
                  />
                )
              }
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
}

export default ContentPage