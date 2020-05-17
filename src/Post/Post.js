import React from "react"
import ContentPage from "../Components/ContentPage/ContentPage"
import Markdown from "../Components/Markdown/Markdown"
import Layout from "../../src/Layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import "./Post.css"
import Meta from "../Components/Meta/Meta"
import sortMarkdownPosts from '../../utils/sortMarkdownPosts'

const Post = ({ data, location }) => {
  let Nav = null

  try {
    const markdownData = data.allRenderedMarkdownPost

    const posts = sortMarkdownPosts(markdownData)
      .map((el) => el.slug)

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
          <Link to={posts[postIndex - 1]}>Previous</Link> |{" "}
          <Link to={posts[postIndex + 1]}>Next</Link>
        </nav>
      )
  } catch (error) {
    console.log("Cannot add navigation items", error)
  }

  return (
    <Layout>
      <div className="Post">
        <ContentPage
          location={location}
          title={data.renderedMarkdownPost.title}
          subtitle={data.renderedMarkdownPost.subtitle || "loading"}
        >
          <Meta
            title={`${data.renderedMarkdownPost.title} | Nabeel Valley`}
            description={data.renderedMarkdownPost.description}
          />

          <Markdown html={data.renderedMarkdownPost.html} />
          {Nav}
        </ContentPage>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    renderedMarkdownPost(slug: { eq: $slug }) {
      id
      description
      html
      title
      subtitle
      slug
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

