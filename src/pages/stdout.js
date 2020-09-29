import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import Markdown from '../Components/Markdown/Markdown'
import Comments from '../Components/Comments/Comments'
import Layout from '../Layout'
import { graphql, Link } from 'gatsby'

import '../Post/Post.css'
import Meta from '../Components/Meta/Meta'
import sortMarkdownPosts from '../../utils/sortMarkdownPosts'
import ProjectItem from '../Components/ProjectGroup/ProjectItem'
import ProjectGroup from '../Components/ProjectGroup/ProjectGroup'

const Stdout = ({ data, location }) => {
  const sortedPosts = sortMarkdownPosts(data.allRenderedMarkdownPost)
    .reverse()
    .map((e) => e.node)

  return (
    <Layout>
      <ContentPage
        location={location}
        title="Stdout"
        subtitle="mostly just a mess"
      >
        <Meta
          title="Stdout | Nabeel Valley"
          description="Dev Logs"
          image={
            data?.site?.siteMetadata?.siteUrl +
            data?.coverImage?.childImageSharp?.fluid?.src
          }
        />

        <ProjectGroup isFullWidth={false}>
          {sortedPosts.map((p, i) => (
            <ProjectItem
              key={i}
              title={p.title}
              subtitle={p.subtitle}
              description={p.description}
              link={p.slug}
              linkText="Read More"
            />
          ))}
        </ProjectGroup>
      </ContentPage>
    </Layout>
  )
}

export default Stdout

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }

    coverImage: file(relativePath: { eq: "home/landing/landing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    allRenderedMarkdownPost(
      filter: { slug: { regex: "/^/stdout/" } }
      sort: { fields: dir }
    ) {
      edges {
        node {
          id
          slug
          title
          subtitle
          description
          dir
        }
      }
    }
  }
`
