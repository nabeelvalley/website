import React from 'react'

import SocialIcons from '../SocialIcons/SocialIcons'

import './ContentPage.css'
import Sidebar from '../Sidebar/Sidebar'
import SidebarItem from '../Sidebar/SidebarItem'
import sortMarkdownPosts from '../../../utils/sortMarkdownPosts'
import { graphql, useStaticQuery } from 'gatsby'

const ContentPage = ({ title, subtitle, children, location }) => {
  const data = useStaticQuery(graphql`
    {
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
    }
  `)

  const sortedPosts = sortMarkdownPosts(data.allRenderedMarkdownPost)
    .map((p) => p.node)
    .reverse()

  return (
    <div className="ContentPage">
      <div className="header">
        <h1 className="heading">{title}</h1>
        <p className="subheading">{subtitle}</p>
        <SocialIcons />
      </div>
      <div className="content grid">
        <main className="main">{children}</main>
        <div className="links">
          {location.pathname !== '/blog' ? (
            <Sidebar title="Blog">
              {sortedPosts.slice(0, 3).map((p, i) => (
                <SidebarItem
                  key={i}
                  title={p.title}
                  date={p.subtitle}
                  description={p.description}
                  link={p.slug}
                  linkText="Read More"
                />
              ))}
            </Sidebar>
          ) : null}
          {location.pathname !== '/code' ? (
            <Sidebar title="Code">
              <SidebarItem
                title="Waddle.js"
                tech={['ts', 'js']}
                description="A collection of general-purpose JavaScript and TypeScript libraries"
                link="https://github.com/nabeelvalley/waddle.js"
                linkText="View Project"
              />
              <SidebarItem
                title="Project Init"
                tech={['ts', 'js']}
                description="A CLI for setting up codebases using preconfigured starter templates for different frameworks, languages, and configurations"
                link="https://github.com/nabeelvalley/project-init"
                linkText="View Project"
              />
              <SidebarItem
                title="Pi Manager"
                tech={['ts', 'js', 'raspberry-pi']}
                description="A lightweight process and application manager for Raspberry Pi"
                link="https://github.com/nabeelvalley/pi-manager"
                linkText="View Project"
              />
            </Sidebar>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ContentPage
