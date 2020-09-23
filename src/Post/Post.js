import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import Markdown from '../Components/Markdown/Markdown'
import Comments from '../Components/Comments/Comments'
import Layout from '../../src/Layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './Post.css'
import Meta from '../Components/Meta/Meta'
import sortMarkdownPosts from '../../utils/sortMarkdownPosts'

import { getImageSources } from '../Components/Helpers/imageQueryBuilder'

const Post = ({ data, location }) => {
  let Nav = null

  try {
    const markdownData = data.allRenderedMarkdownPost

    const posts = sortMarkdownPosts(markdownData).map((el) => el.slug)

    var postIndex = posts.indexOf(data.renderedMarkdownPost.slug)

    if (postIndex < 0) Nav = null
    else if (postIndex === 0)
      Nav = (
        <nav className="post-nav">
          <Link to={posts[1]}>Next</Link>
        </nav>
      )
    else if (postIndex === posts.length - 1 && posts.length > 1)
      Nav = (
        <nav className="post-nav">
          <Link to={posts[postIndex - 1]}>Previous</Link>
        </nav>
      )
    else
      Nav = (
        <nav className="post-nav">
          <Link to={posts[postIndex - 1]}>Previous</Link> |{' '}
          <Link to={posts[postIndex + 1]}>Next</Link>
        </nav>
      )
  } catch (error) {
    console.log('Cannot add navigation items', error)
  }

  return (
    <Layout>
      <div className="Post">
        <ContentPage
          location={location}
          title={data.renderedMarkdownPost.title}
          subtitle={data.renderedMarkdownPost.subtitle || ''}
        >
          <Meta
            title={`${data.renderedMarkdownPost.title} | Nabeel Valley`}
            description={data?.renderedMarkdownPost?.description}
            image={
              data?.site?.siteMetadata?.siteUrl +
              (data?.renderedMarkdownPost?.ogImage ||
                data?.mobileImage?.childImageSharp?.fluid?.src ||
                data?.placeholderImage?.childImageSharp?.fluid?.src)
            }
          />

          {data?.mobileImage ||
          data?.desktopImage ||
          data?.largeDesktopImage ? (
            <Img
              className="image"
              fluid={getImageSources(data)}
              loading="lazy"
            />
          ) : null}

          <Markdown html={data.renderedMarkdownPost.html} />
          {Nav}
          <Comments />
        </ContentPage>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!, $image: String) {
    renderedMarkdownPost(slug: { eq: $slug }) {
      id
      description
      html
      title
      subtitle
      image
      slug
      ogImage
    }

    site {
      siteMetadata {
        siteUrl
      }
    }

    placeholderImage: file(relativePath: { eq: "home/landing/landing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    mobileImage: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    desktopImage: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    largeDesktopImage: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    allRenderedMarkdownPost(filter: { slug: { regex: "/blog/" } }) {
      edges {
        node {
          slug
        }
      }
    }
  }
`
