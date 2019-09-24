import React from 'react'
import Landing from '../Components/Landing/Landing';
import FeaturedPost from '../Components/FeaturedPost/FeaturedPost'
import SectionDivider from '../Components/SectionDivider/SectionDivider'
import ProjectGroup from '../Components/ProjectGroup/ProjectGroup';
import ProjectItem from '../Components/ProjectGroup/ProjectItem';

const Home = () => <div className="Home">
    <Landing />
    <FeaturedPost
        image="/images/posts/image1.jpg"
        title="blog post title"
        date="15 September 2019"
        synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
        link="/home"
    />
    <SectionDivider title="What's New?" />
    <ProjectGroup isFullWidth={true}>
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
</div>

export default Home