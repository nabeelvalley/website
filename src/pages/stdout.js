import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import Markdown from '../Components/Markdown/Markdown'
import Comments from '../Components/Comments/Comments'
import Layout from '../Layout'
import { graphql, Link } from 'gatsby'

import '../Post/Post.css'
import Meta from '../Components/Meta/Meta'
import sortMarkdownPosts from '../../utils/sortMarkdownPosts'

const Stdout = ({ data, location }) => {
  const sortedPosts = sortMarkdownPosts(data.allRenderedMarkdownPost)
    .reverse()
    .map((e) => e.node)

  const content = sortedPosts.map((el) => (
    <article className="log" key={el.slug}>
      <h4 className="title">{el.title}</h4>
      <h5 className="date">{el.subtitle}</h5>
      <div className="description">{el.description}</div>
      <Link to={el.slug}>Open</Link>
    </article>
  ))

  return (
    <Layout>
      <div className="Post">
        <ContentPage
          location={location}
          title="Log"
          subtitle="console.log(dev)"
        >
          <Meta
            title="Stdout | Nabeel Valley"
            description="Dev Logs"
            image={
              data?.site?.siteMetadata?.siteUrl +
              data?.coverImage?.childImageSharp?.fluid?.src
            }
          />

          <Markdown children={<section className="logs">{content}</section>} />
          <Comments />
        </ContentPage>
      </div>
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
