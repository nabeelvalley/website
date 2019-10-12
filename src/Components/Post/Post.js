import React from 'react'
import { NavLink } from 'react-router-dom'
import ContentPage from '../../Components/ContentPage/ContentPage'
import Preloader from '../../Components/Preloader/Preloader'
import Markdown from '../Markdown/Markdown'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            slug: props.location.pathname,
            content: '',
            subtitle: '',
            title: '',
            metaLoadingError: false,
            contentLoadingError: false,
            contentLoaded: false
        }
    }

    async componentDidMount() {
        console.log(this.state)

        // get post metadata
        try {
            const metaRes = await fetch(`/content${this.state.slug}.json`)
            const metaJson = await metaRes.json()
            this.setState({ ...this.state, subtitle: metaJson.date, title: metaJson.title })
        } catch (error) {
            this.setState({ ...this.state, metaLoadingError: true, subtitle: "Page not found", title: "404" })
            console.error('failed to load post meta')
        }

        try {
            const contentRes = await fetch(`/content${this.state.slug}.md`)
            const contentText = await contentRes.text()
            this.setState({ ...this.state, content: contentText })
        } catch (error) {
            this.setState({ ...this.state, contentLoadingError: true })
            console.error('failed to load post content')
        } finally {
            this.setState({ ...this.state, contentLoaded: true })
        }
    }

    render() {
        return <ContentPage title={this.state.title || 'Blog'} subtitle={this.state.subtitle || 'rants and thoughts'}>
            {
                !this.state.contentLoaded
                    ? <Preloader />
                    : !this.state.contentLoadingError && !this.state.metaLoadingError
                        ? < Markdown text={this.state.content} />
                        : <p>I can't seem to find the page you're looking for, but you may as well <NavLink to="/home">take a look around</NavLink> since you're here anyway right?</p>
            }
        </ContentPage>
    }
}

export default Blog