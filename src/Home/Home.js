import React from 'react'
import Landing from '../Components/Landing/Landing';
import FeaturedPost from '../Components/FeaturedPost/FeaturedPost'
import SectionDivider from '../Components/SectionDivider/SectionDivider'
import ProjectGroup from '../Components/ProjectGroup/ProjectGroup';
import ProjectItem from '../Components/ProjectGroup/ProjectItem';
import DenseGrid from '../Components/DenseGrid/DenseGrid'
import GridSummary from '../Components/DenseGrid/GridSummary'
import GridImage from '../Components/DenseGrid/GridImage';

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
    <DenseGrid>
        <GridSummary
            title="blog post title"
            date="15 September 2019"
            synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
            link="/home"
        />
        <GridImage
            image="/images/posts/image1.jpg"
            gridColumn="span 4"
            gridRow="span 3"
        />
        <GridImage
            image="/images/posts/image2.jpg"
            gridColumn="span 3"
            gridRow="span 4"
        />
        <GridSummary
            title="blog post title"
            date="15 September 2019"
            synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
            link="/home"
            gridRow="span 1"
        />
        <GridSummary
            title="blog post title"
            date="15 September 2019"
            synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
            link="/home"
            gridRow="span 1"
        />
        <GridImage
            image="/images/posts/image3.jpg"
            gridColumn="span 4"
            gridRow="span 3"
            useAutoHeight
        />
    </DenseGrid>
</div>

export default Home