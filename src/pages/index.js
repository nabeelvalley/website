import React from "react"
import Landing from "../Components/Landing/Landing"
import FeaturedPost from "../Components/FeaturedPost/FeaturedPost"
import SectionDivider from "../Components/SectionDivider/SectionDivider"
import ProjectGroup from "../Components/ProjectGroup/ProjectGroup"
import ProjectItem from "../Components/ProjectGroup/ProjectItem"
import DenseGrid from "../Components/DenseGrid/DenseGrid"
import GridSummary from "../Components/DenseGrid/GridSummary"
import GridImage from "../Components/DenseGrid/GridImage"
import Layout from "../Layout"
import { graphql } from "gatsby"
import Meta from "../Components/Meta/Meta"
import sortMarkdownPosts from '../../utils/sortMarkdownPosts'

const Home = ({ location, data }) => {
  const date = new Date(data.site.buildTime)

  var dateParts = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric' }).formatToParts(date)

  const day = dateParts.filter(p => p.type == 'day')[0].value
  const month = dateParts.filter(p => p.type == 'month')[0].value
  const year = dateParts.filter(p => p.type == 'year')[0].value

  const sortedPosts = sortMarkdownPosts(data.allRenderedMarkdownPost).map(p => p.node).reverse()

  return (
    <Layout>
      <div className="Home">
        <Meta
          title="Home | Nabeel Valley"
          description="Nabeel Valley's Portfolio and Blog. Web Development, Photography, and Design"
        />

        <Landing />
        <FeaturedPost
          imageSources={{
            mobileImage: data.zwk4_mobileImage,
            desktopImage: data.zwk4_desktopImage,
            largeDesktopImage: data.zwk4_largeDesktopImage,
          }}
          title={sortedPosts[0].title}
          date={sortedPosts[0].subtitle}
          description={sortedPosts[0].description}
          link={sortedPosts[0].slug}
        />
        <SectionDivider title="What's New?" />
        <ProjectGroup isFullWidth={true}>
          <ProjectItem
            title="Docs"
            tech={[`Updated: ${day} ${month} ${year}`]}
            description="Pretty much all my notes on software development in one place"
            link="/docs"
            linkText="View Docs"
          />
          <ProjectItem
            title="Rak'ah"
            tech={["svelte", "js", "netlify"]}
            description="Information on the number of Rak'ah for different Salaat. Essentially a fork of 'Form and Structure' with different content"
            link="https://rakah.netlify.com"
            linkText="Go to Site"
          />
        </ProjectGroup>
        <SectionDivider title="From the Blog" />
        <DenseGrid>
          <GridImage
            imageSources={{
              mobileImage: data.zwk2_mobileImage,
              desktopImage: data.zwk2_desktopImage,
              largeDesktopImage: data.zwk2_largeDesktopImage,
            }}
            gridColumn="span 4"
            gridRow="span 4"
          />
          <GridSummary
            title={sortedPosts[1].title}
            date={sortedPosts[1].subtitle}
            description={sortedPosts[1].description}
            link={sortedPosts[1].slug}
            gridColumn="span 4"
            gridRow="span 2"
          />
          <GridSummary
            title={sortedPosts[2].title}
            date={sortedPosts[2].subtitle}
            description={sortedPosts[2].description}
            link={sortedPosts[2].slug}
            gridColumn="span 4"
            gridRow="span 2"
          />
          <GridSummary
            title="Real-time Communication with MQTT"
            date="12 November 2019"
            description="MQTT and real-time communication with the browser, JavaScript, Web Sockets and a Mosquitto message broker"
            link="/blog/2019/12-11/rtc-with-mqtt"
            gridColumn="span 4"
            gridRow="span 2"
          />
          <GridImage
            imageSources={{
              mobileImage: data.mqtt_mobileImage,
              desktopImage: data.mqtt_desktopImage,
              largeDesktopImage: data.mqtt_largeDesktopImage,
            }}
            gridColumn="span 4"
            gridRow="span 4"
          />
          <GridSummary
            title={sortedPosts[3].title}
            date={sortedPosts[3].subtitle}
            description={sortedPosts[3].description}
            link={sortedPosts[3].slug}
            gridColumn="span 4"
            gridRow="span 2"
          />
          <GridImage
            imageSources={{
              mobileImage: data.wild_mobileImage,
              desktopImage: data.wild_desktopImage,
              largeDesktopImage: data.wild_largeDesktopImage,
            }}
            gridColumn="span 8"
            gridRow="span 2"
          />
          <GridSummary
            title={sortedPosts[4].title}
            date={sortedPosts[4].subtitle}
            description={sortedPosts[4].description}
            link={sortedPosts[4].slug}
            gridColumn="span 4"
            gridRow="span 2"
          />
          <GridImage
            imageSources={{
              mobileImage: data.zwk1_mobileImage,
              desktopImage: data.zwk1_desktopImage,
              largeDesktopImage: data.zwk1_largeDesktopImage,
            }}
            gridColumn="span 4"
            gridRow="span 4"
          />
          <GridSummary
            title={sortedPosts[5].title}
            date={sortedPosts[5].subtitle}
            description={sortedPosts[5].description}
            link={sortedPosts[5].slug}
            gridColumn="span 4"
            gridRow="span 2"
          />
        </DenseGrid>
      </div>
    </Layout>
  )
}
export default Home

export const query = graphql`
  {
    site {
      buildTime
    }
    mqtt_mobileImage: file(relativePath: { eq: "blog/2019/12-11/header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mqtt_desktopImage: file(
      relativePath: { eq: "blog/2019/12-11/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mqtt_largeDesktopImage: file(
      relativePath: { eq: "blog/2019/12-11/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    fsweb_mobileImage: file(
      relativePath: { eq: "blog/2019/30-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fsweb_desktopImage: file(
      relativePath: { eq: "blog/2019/30-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fsweb_largeDesktopImage: file(
      relativePath: { eq: "blog/2019/30-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    wild_mobileImage: file(relativePath: { eq: "home/landing/slide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wild_desktopImage: file(relativePath: { eq: "home/landing/slide.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wild_largeDesktopImage: file(
      relativePath: { eq: "home/landing/slide.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk1_mobileImage: file(relativePath: { eq: "zwartkops/image12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk1_desktopImage: file(relativePath: { eq: "zwartkops/image12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk1_largeDesktopImage: file(
      relativePath: { eq: "zwartkops/image12.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk2_mobileImage: file(relativePath: { eq: "zwartkops/image2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk2_desktopImage: file(relativePath: { eq: "zwartkops/image2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk2_largeDesktopImage: file(relativePath: { eq: "zwartkops/image2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk3_mobileImage: file(relativePath: { eq: "zwartkops/image15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk3_desktopImage: file(relativePath: { eq: "zwartkops/image15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk3_largeDesktopImage: file(
      relativePath: { eq: "zwartkops/image15.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk4_mobileImage: file(relativePath: { eq: "zwartkops/image11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk4_desktopImage: file(relativePath: { eq: "zwartkops/image11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk4_largeDesktopImage: file(
      relativePath: { eq: "zwartkops/image11.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    allRenderedMarkdownPost(filter: { slug: { regex: "/blog/" } }) {
      edges {
        node {
          slug
          title
          subtitle
          description
        }
      }
    }
  }
`
