import React from 'react'
import { NavLink } from 'react-router-dom'
import ContentPage from '../../Components/ContentPage/ContentPage'
import Preloader from '../../Components/Preloader/Preloader'
import Markdown from '../Markdown/Markdown'

import './Post.css'

class Post extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            slug: props.location.pathname,
            content: '',
            date: '',
            title: '',
            metaLoadingError: false,
            contentLoadingError: false,
            contentLoaded: false
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch(`/content${this.state.slug}.json`)
            const json = await res.json()
            this.setState({ ...this.state, ...json })
        } catch (error) {
            this.setState({ ...this.state, metaLoadingError: true, date: "Page not found", title: "404" })
            console.error('failed to load post meta')
        }

        try {
            const res = await fetch(`/content${this.state.slug}.md`)
            const content = await res.text()
            this.setState({ ...this.state, content })
        } catch (error) {
            this.setState({ ...this.state, contentLoadingError: true })
            console.error('failed to load post content')
        } finally {
            this.setState({ ...this.state, contentLoaded: true })
        }
    }

    render() {
        return <div className="Post">
            <ContentPage title={this.state.title || '...'} subtitle={this.state.date || 'loading'}>
                {
                    !this.state.contentLoaded
                        ? <Preloader />
                        : !this.state.contentLoadingError && !this.state.metaLoadingError
                            ? < Markdown text={this.state.content} />
                            : <p>I can't seem to find the page you're looking for, but you may as well <NavLink to="/home">take a look around</NavLink> since you're here anyway right?</p>
                }
            </ContentPage>
        </div>
    }
}

export default Post