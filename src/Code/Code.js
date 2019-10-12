import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import PostListing from '../Components/PostListing/PostListing'
import ProjectGroup from '../Components/ProjectGroup/ProjectGroup'
import ProjectItem from '../Components/ProjectGroup/ProjectItem'

const Code = () => <ContentPage title="Code" subtitle="Endeavours in Monospace">

    <ProjectGroup isFullWidth={false}>
        <ProjectItem
            title="Project 1"
            tech={["js", "react", "docker"]}
            description="this is the description of a project ya know"
            link="#"
        />
        <ProjectItem
            title="Project 1"
            tech={["js", "react", "docker"]}
            description="this is the description of a project ya know"
            link="#"
        />
    </ProjectGroup>

    <PostListing textAlignRight={true}
        image="/images/posts/image1.jpg"
        title="blog post title"
        date="15 September 2019"
        synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
        link="/home"
    />

    <PostListing
        image="/images/posts/image1.jpg"
        title="blog post title"
        date="15 September 2019"
        synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
        link="/home"
    />
</ContentPage>

export default Code