import React from "react"
import { Helmet } from "react-helmet"
import ContentPage from "../Components/ContentPage/ContentPage"
import Markdown from "../Components/Markdown/Markdown"
import Layout from "../Layout"
import { graphql, Link } from "gatsby"

import "../Post/Post.css"
import Meta from "../Components/Meta/Meta"

const Docs = ({ data, location }) => {
  const Content = data.allRenderedMarkdownPost.group.map((group) => (
    <div key={group.edges[0].node.dir}>
      <h2>{group.edges[0].node.dir}</h2>
      <ul>
        {group.edges.map((el) => (
          <li key={el.node.slug}>
            <Link to={el.node.slug}>{el.node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <Layout>
      <div className="Post">
        <ContentPage
          location={location}
          title="Docs"
          subtitle="Index for GitHub Docs"
        >
          <Meta
            title="Docs | Nabeel Valley"
            description="Index for Personal Docs"
          />

          <Markdown children={Content} />
        </ContentPage>
      </div>
    </Layout>
  )
}

export default Docs

export const query = graphql`
  {
    allRenderedMarkdownPost(
      filter: { slug: { regex: "/^/docs/" } }
      sort: { fields: dir }
    ) {
      group(field: dir) {
        edges {
          node {
            id
            slug
            title
            subtitle
            dir
          }
        }
      }
    }
  }
`
