import React from 'react'
import { Helmet } from 'react-helmet'
import AnyLink from '../Components/AnyLink/AnyLink'
import ContentPage from '../Components/ContentPage/ContentPage'
import Markdown from '../Components/Markdown/Markdown'
import Layout from '../../src/Layout'
import '../Post/Post.css'

const _404 = ({ data, location }) => <Layout>
    <div className="Post">
        <ContentPage location={location} title="404" subtitle="Page Not Found">
            <Helmet>
                <title>404 | Nabeel Valley</title>
            </Helmet>
            <main class="main">
                <p>
                    I can't seem to find the page you're looking for, but you may as well <AnyLink to="/">take a look around</AnyLink> since you're here anyway right?
                </p>
            </main>
        </ContentPage>
    </div>
</Layout >

export default _404