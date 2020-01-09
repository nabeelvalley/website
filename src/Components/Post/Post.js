import React from 'react'
import { Helmet } from 'react-helmet'
import AnyLink from '../AnyLink/AnyLink'
import ContentPage from '../../Components/ContentPage/ContentPage'
import Preloader from '../../Components/Preloader/Preloader'
import Markdown from '../Markdown/Markdown'

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

    async componentDidMount() {
        try {
            const jsonResPromise = fetch(`/content${this.state.slug}.json`)
            const contentResPromise = fetch(`/content${this.state.slug}.md`)

            const jsonRes = await jsonResPromise
            const contentRes = await contentResPromise

            const metaJson = await jsonRes.json()
            const contentText = await contentRes.text()

            this.setState({ ...this.state, ...metaJson, content: contentText })

        } catch (error) {
            this.setState({ ...this.state, metaLoadingError: true, subtitle: "Page not found", title: "404" })
            console.error('failed to load data')
        } finally {
            this.setState({ ...this.state, contentLoaded: true })
        }
    }

    render() {
        return <div className="Post">
            <ContentPage title={this.state.title || '...'} subtitle={this.state.subtitle || 'loading'}>
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
                            : <p>I can't seem to find the page you're looking for, but you may as well <AnyLink to="/home">take a look around</AnyLink> since you're here anyway right?</p>
                }
            </ContentPage>
        </div>
    }
}

export default Post