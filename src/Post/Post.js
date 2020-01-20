import React from 'react'
import { Helmet } from 'react-helmet'
import AnyLink from '../Components/AnyLink/AnyLink'
import ContentPage from '../Components/ContentPage/ContentPage'
import Preloader from '../Components/Preloader/Preloader'
import Markdown from '../Components/Markdown/Markdown'
import Layout from '../../src/Layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import './Post.css'

const Post = ({ data, location }) => {
    let Nav = null

    try {
        const posts = data.allRenderedMarkdownPost.edges.map(el => {

            const slug = el.node.slug

            const year = slug.match(/\d\d\d\d/)[0]

            const date = slug.match(/\d\d-\d\d/)[0]

            const [day, month] = date.split('-').map(i => +i)

            return {
                slug: slug,
                year: +year,
                month: +month,
                day: +day
            }
        }).sort((a, b) => a.day - b.day)
            .sort((a, b) => a.month - b.month)
            .sort((a, b) => a.year - b.year)
            .map(el => el.slug)

        var postIndex = posts.indexOf(data.renderedMarkdownPost.slug)

        if (postIndex < 0) Nav = null

        else if (postIndex === 0) Nav = <nav className="post-nav">
            <Link to={posts[1]}>Next</Link>
        </nav>

        else if ((postIndex === posts.length - 1) && (posts.length > 1)) Nav = <nav className="post-nav">
            <Link to={posts[postIndex - 1]}>Previous</Link>
        </nav>

        else Nav = <nav className="post-nav">
            <Link to={posts[postIndex - 1]}>Previous</Link> | <Link to={posts[postIndex + 1]}>Next</Link>
        </nav>

    } catch (error) {
        console.log('Cannot add navigation items', error)
    }


    return <Layout>
        <div className="Post">
            <ContentPage location={location} title={data.renderedMarkdownPost.title} subtitle={data.renderedMarkdownPost.subtitle || 'loading'}>
                <Helmet>
                    <title>{data.renderedMarkdownPost.title} | Nabeel Valley</title>
                    <meta name="description" content={data.renderedMarkdownPost.description} />
                </Helmet>
                <Markdown html={data.renderedMarkdownPost.html} />
                {Nav}
            </ContentPage>
        </div>
    </Layout >
}

export default Post

export const query = graphql`
    query ($slug: String!) {
        renderedMarkdownPost(slug: {eq: $slug}) {
            id
            description
            html
            title
            subtitle
            slug
        }

        allRenderedMarkdownPost(filter: {slug: {regex: "/blog/"}}) {
            edges {
                node {
                    slug
                }
            }
        }
    }
`