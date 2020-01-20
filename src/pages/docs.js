import React from 'react'
import { Helmet } from 'react-helmet'
import ContentPage from '../Components/ContentPage/ContentPage'
import Markdown from '../Components/Markdown/Markdown'
import Layout from '../Layout'
import { graphql, Link } from 'gatsby'

import '../../Post/Post.css'

const Docs = ({ data, location }) => {
    const titleCase = (title) => {
        var sentence = title.toLowerCase().split(" ")
        for (var i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
        }

        return sentence.join(" ")
    }

    const Content = data.allRenderedMarkdownPost.group.map(group => <div key={group.edges[0].node.dir}>
        <h2>{titleCase(group.edges[0].node.dir)}</h2>
        <ul>
            {
                group.edges.map(el => <li key={el.node.slug}><Link to={el.node.slug}>{el.node.title}</Link></li>)
            }
        </ul>
    </div>
    )

    console.log(Content)

    return <Layout>
        <div className="Post">
            <ContentPage location={location} title="Docs Index" subtitle="Index for GitHub Docs">
                <Helmet>
                    <title>Docs | Nabeel Valley</title>
                    <meta name="description" content="Index for GitHub Docs" />
                </Helmet>
                <main>
                    <Markdown children={Content} />
                </main>
            </ContentPage>
        </div>
    </Layout >
}

export default Docs

export const query = graphql`{
  allRenderedMarkdownPost(filter: {slug: {regex: "/^/docs/"}}, sort: {fields: dir}) {
    group(field: dir) {
      edges {
        node {
          id
          slug
          title
          subtitle
          cover
          dir
        }
      }
    }
  }
}
`