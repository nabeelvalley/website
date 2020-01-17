import React from 'react'
import { Helmet } from 'react-helmet'
import AnyLink from '../Components/AnyLink/AnyLink'
import ContentPage from '../Components/ContentPage/ContentPage'
import Preloader from '../Components/Preloader/Preloader'
import Markdown from '../Components/Markdown/Markdown'
import Layout from '../../src/Layout'
import { graphql } from 'gatsby'

import './Post.css'

const Post = ({ data, location }) => <Layout>
    <div className="Post">
        <ContentPage location={location} title={data.renderedMarkdownPost.title} subtitle={data.renderedMarkdownPost.subtitle || 'loading'}>
            <Helmet>
                <title>{data.renderedMarkdownPost.title} | Nabeel Valley</title>
                <meta name="description" content={data.renderedMarkdownPost.description} />
            </Helmet>
            <Markdown html={data.renderedMarkdownPost.html} />
        </ContentPage>
    </div>
</Layout >

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
    }
`