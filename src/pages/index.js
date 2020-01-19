import React from 'react'
import { Helmet } from 'react-helmet'
import Landing from '../Components/Landing/Landing'
import FeaturedPost from '../Components/FeaturedPost/FeaturedPost'
import SectionDivider from '../Components/SectionDivider/SectionDivider'
import ProjectGroup from '../Components/ProjectGroup/ProjectGroup'
import ProjectItem from '../Components/ProjectGroup/ProjectItem'
import DenseGrid from '../Components/DenseGrid/DenseGrid'
import GridSummary from '../Components/DenseGrid/GridSummary'
import GridImage from '../Components/DenseGrid/GridImage'
import Layout from '../Layout'
import { graphql } from 'gatsby'

const Home = ({ location, data }) => <Layout>
    <div className="Home">
        <Helmet>
            <title>Home | Nabeel Valley</title>
            <meta name="description" content="Nabeel Valley's Portfolio and Blog. Web Development, Photography, and Design" />
        </Helmet>

        <Landing />
        <FeaturedPost
            image="/content/blog/2019/12-11/header.jpg"
            title="Real-time Communication with MQTT"
            date="12 November 2019"
            description="MQTT and real-time communication with the browser, JavaScript, Web Sockets and a Mosquitto message broker"
            link="/blog/2019/12-11/rtc-with-mqtt"
        />
        <SectionDivider title="What's New?" />
        <ProjectGroup isFullWidth={true}>
            <ProjectItem
                title="Docs"
                tech={['literally everything']}
                description="I'm migrating all my dev notes over from GitHub Pages, you can take a look at what's there so far:"
                link="/docs/index"
                linkText="View Docs"
            />
            <ProjectItem
                title="Rak'ah"
                tech={['svelte', 'js', 'netlify']}
                description="Information on the number of Rak'ah for different Salaat. Essentially a fork of 'Form and Structure' with different content"
                link="https://rakah.netlify.com"
                linkText="Go to Site"
            />
        </ProjectGroup>
        <SectionDivider title="From the Blog" />
        <DenseGrid>
            <GridSummary
                title="Introduction to F# Web APIs"
                date="30 October 2019"
                description="The basics of building a Web API with .NET Core and F#"
                link="/blog/2019/30-10/fsharp-webapi"
                gridColumn="span 4"
                gridRow="span 2"
            />
            <GridImage
                imageSources={{
                    mobileImage: data.mqtt_mobileImage,
                    desktopImage: data.mqtt_desktopImage,
                    largeDesktopImage: data.mqtt_largeDesktopImage
                }}
                image="/content/blog/2019/30-10/header.jpg"
                gridColumn="span 4"
                gridRow="span 3"
            />
            <GridImage
                imageSources={{
                    mobileImage: data.wild_mobileImage,
                    desktopImage: data.wild_desktopImage,
                    largeDesktopImage: data.wild_largeDesktopImage
                }}
                image="/content/blog/2019/12-10/header.jpg"
                gridColumn="span 4"
                gridRow="span 3"
            />
            <GridSummary
                title="Looky, a wild HTML!"
                date="13 October 2019"
                description="The first blog post, a quick journey through my design and development process"
                link="/blog/2019/12-10/looky-a-wild-html"
                gridColumn="span 4"
                gridRow="span 2"
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
            <GridImage
                imageSources={{
                    mobileImage: data.zwk1_mobileImage,
                    desktopImage: data.zwk1_desktopImage,
                    largeDesktopImage: data.zwk1_largeDesktopImage
                }}
                image="/images/zwartkops/image12.jpg"
                gridColumn="span 4"
                gridRow="span 3"
            />
            <GridImage
                imageSources={{
                    mobileImage: data.zwk2_mobileImage,
                    desktopImage: data.zwk2_desktopImage,
                    largeDesktopImage: data.zwk2_largeDesktopImage
                }}
                image="/images/zwartkops/image2.jpg"
                gridColumn="span 4"
                gridRow="span 3"
            />
        </DenseGrid>
    </div>
</Layout>

export default Home


export const query = graphql`
{
    mqtt_mobileImage: file(relativePath: {eq: "blog/2019/12-11/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 690, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    mqtt_desktopImage: file(relativePath: {eq: "blog/2019/12-11/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    mqtt_largeDesktopImage: file(relativePath: {eq: "blog/2019/12-11/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    
    fsweb_mobileImage: file(relativePath: {eq: "blog/2019/30-10/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 690, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    fsweb_desktopImage: file(relativePath: {eq: "blog/2019/30-10/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    fsweb_largeDesktopImage: file(relativePath: {eq: "blog/2019/30-10/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    
    wild_mobileImage: file(relativePath: {eq: "blog/2019/12-10/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 690, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    wild_desktopImage: file(relativePath: {eq: "blog/2019/12-10/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    wild_largeDesktopImage: file(relativePath: {eq: "blog/2019/12-10/header.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }

    zwk1_mobileImage: file(relativePath: {eq: "zwartkops/image12.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 690, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    zwk1_desktopImage: file(relativePath: {eq: "zwartkops/image12.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    zwk1_largeDesktopImage: file(relativePath: {eq: "zwartkops/image12.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }

    zwk2_mobileImage: file(relativePath: {eq: "zwartkops/image2.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 690, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    zwk2_desktopImage: file(relativePath: {eq: "zwartkops/image2.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
    zwk2_largeDesktopImage: file(relativePath: {eq: "zwartkops/image2.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
        }
    }
}
`