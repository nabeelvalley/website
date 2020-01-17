import React from 'react'
import { Helmet } from 'react-helmet'
import AnyLink from '../Components/AnyLink/AnyLink'
import ContentPage from '../Components/ContentPage/ContentPage'
import Preloader from '../Components/Preloader/Preloader'
import Markdown from '../Components/Markdown/Markdown'

import './Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: props.location.pathname,
            content: '',
            subtitle: '',
            title: '',
            description: '',
            metaLoadingError: false,
            contentLoadingError: false,
            contentLoaded: false
        }
    }

    scrollTop = () => window.scrollTo(0, 0)

    getPostContent = async () => {
        try {
            const res = await fetch(`/content${this.state.slug}.json`)
            const json = await res.json()
            this.setState({ ...this.state, ...json }, this.scrollTop)
        } catch (error) {
            this.setState({ ...this.state, metaLoadingError: true, subtitle: "Page not found", title: "404" }, this.scrollTop)
            console.error('failed to load post meta')
        }

        try {
            const res = await fetch(`/content${this.state.slug}.md`)
            const content = await res.text()
            this.setState({ ...this.state, content })
        } catch (error) {
            this.setState({ ...this.state, contentLoadingError: true }, this.scrollTop)
            console.error('failed to load post content')
        } finally {
            this.setState({ ...this.state, contentLoaded: true }, this.scrollTop)
        }
    }

    async componentDidMount() {
        this.setState({ ...this.state, contentLoaded: false }, this.getPostContent)
    }

    render() {
        return
        <Layout>
            <div className="Post">
                <ContentPage location={location} title={this.state.title || '...'} subtitle={this.state.subtitle || 'loading'}>
                    {
                        !this.state.contentLoaded
                            ? <Helmet>
                                <title>{this.state.title} | Nabeel Valley</title>
                                <meta name="description" content={this.state.description} />
                            </Helmet>
                            : null
                    }
                    {
                        !this.state.contentLoaded
                            ? <Preloader />
                            : !this.state.contentLoadingError && !this.state.metaLoadingError
                                ? < Markdown text={this.state.content} />
                                : <p>I can't seem to find the page you're looking for, but you may as well <AnyLink to="/">take a look around</AnyLink> since you're here anyway right?</p>
                    }
                </ContentPage>
            </div>
        </Layout>
    }
}

export default Post