import React from 'react'
import { Helmet } from 'react-helmet'
import Landing from '../Components/Landing/Landing';
import FeaturedPost from '../Components/FeaturedPost/FeaturedPost'
import SectionDivider from '../Components/SectionDivider/SectionDivider'
import ProjectGroup from '../Components/ProjectGroup/ProjectGroup';
import ProjectItem from '../Components/ProjectGroup/ProjectItem';
import DenseGrid from '../Components/DenseGrid/DenseGrid'
import GridSummary from '../Components/DenseGrid/GridSummary'
import GridImage from '../Components/DenseGrid/GridImage';

const Home = () => <div className="Home">
    <Helmet>
        <title>Home | Nabeel Valley</title>
        <meta name="description" content="Nabeel Valley's Portfolio and Blog. Web Development, Photography, and Design" />
    </Helmet>

    <Landing />
    <FeaturedPost
        image="content/blog/2019/30-10/header.jpg"
        title="Intro to F# Web APIs"
        date="30 October 2019"
        description="The basics of building a Web API with .NET Core and F#"
        link="/blog/2019/30-10/fsharp-webapi"
    />
    <SectionDivider title="What's New?" />
    <ProjectGroup isFullWidth={true}>
        <ProjectItem
            title="Salaah Times"
            tech={['react', 'strapi', 'docker', 'mongo-db']}
            description="Web App to enable Masaajid to manage and publish their Salaah Times for a given area. Built with StrapiCMS, Mongo and React and an unnecessarily complicated Docker build"
            link="https://github.com/nabeelvalley/SalaahTimesApp"
            linkText="Go to GitHub"
        />
        <ProjectItem
            title="Form and Structure"
            tech={['svelte', 'js', 'netlify']}
            description="Website about Poetic Form and Structure built with Svelte, one of those 'always-a-work-in-progress' kind of things"
            link="https://formandstructure.netlify.com"
            linkText="Go to Site"
        />
    </ProjectGroup>
    <DenseGrid>
        <GridSummary
            title="Looky, a wild HTML!"
            date="13 October 2019"
            description="The first blog post, a quick journey through my design and development process"
            link="/blog/2019/12-10/looky-a-wild-html"
            gridColumn="span 4"
            gridRow="span 2"
        />
        <GridImage
            image="/content/blog/2019/12-10/header.jpg"
            gridColumn="span 4"
            gridRow="span 3"
        />
        <GridImage
            image="/images/zwartkops/image12.jpg"
            gridColumn="span 4"
            gridRow="span 3"
        />
        <GridSummary
            title="Zwartkops Gallery"
            date="27 July 2019"
            description="A photo gallery of the Extreme Racing Festival at Zwartkops Raceway in Centurion"
            link="/gallery/zwartkops"
            linkText="View Gallery"
            gridColumn="span 4"
            gridRow="span 2"
        />
    </DenseGrid>
</div>

export default Home