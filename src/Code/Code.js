import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import ProjectGroup from '../Components/ProjectGroup/ProjectGroup'
import ProjectItem from '../Components/ProjectGroup/ProjectItem'

const Code = () => <ContentPage title="Code" subtitle="Endeavours in Monospace">

    <ProjectGroup isFullWidth={false}>
        <ProjectItem
            title="Form and Structure"
            tech={['svelte', 'js', 'netlify']}
            description="Website about Poetic Form and Structure built with Svelte, one of those 'always-a-work-in-progress' kind of things"
            link="https://formandstructure.netlify.com"
            linkText="Go to Site"
        />
        <ProjectItem
            title="Salaah Times"
            tech={['react', 'strapi', 'docker', 'mongo-db']}
            description="Web App to enable Masaajid to manage and publish their Salaah Times for a given area. Built with StrapiCMS, Mongo and React and an unnecessarily complicated Docker build"
            link="https://github.com/nabeelvalley/SalaahTimesApp"
            linkText="Go to GitHub"
        />
        <ProjectItem
            title="Hangman.js"
            tech={['node.js']}
            description="Basic Implementation of Hangman using node.js, worked through while teaching the Introduction to Web Development weekend-classes at Al Ghazali College"
            link="https://github.com/nabeelvalley/hangman-js"
            linkText="Go to GitHub"
        />
        <ProjectItem
            title="Twit List"
            tech={['node.js', 'express', 'twitter', 'mongo-db']}
            description="Application that allows you to bookmark Tweets and save them to your account simply by sharing that tweet with an app host user's account, works in tandem with the Webhooks Project"
            link="https://github.com/nabeelvalley/TwitList"
            linkText="Go to GitHub"
        />
        <ProjectItem
            title="Webhooks"
            tech={['node.js', 'express', 'twitter']}
            description="A repository for testing and developing Webhooks for different applications such as Twitter, Facebook, and Twillio. At the moment it's mostly just a Twitter bot with some FUNctionality backed by the Twit List application"
            link="https://github.com/nabeelvalley/Webhooks"
            linkText="Go to GitHub"
        />
    </ProjectGroup>
</ContentPage>

export default Code