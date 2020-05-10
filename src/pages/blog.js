import React from "react"
import { Helmet } from "react-helmet"
import ContentPage from "../Components/ContentPage/ContentPage"
import PostListing from "../Components/PostListing/PostListing"
import Layout from "../Layout"
import { graphql } from "gatsby"
import Meta from "../Components/Meta/Meta"

const Blog = ({ location, data }) => (
  <Layout>
    <ContentPage
      location={location}
      title="Blog"
      subtitle="Rants and Ramblings"
    >
      <Meta
        title="Blog | Nabeel Valley"
        description="Rants and Ramblings. Random thoughts on Web Development, Photography, Design, and Life"
      />

      <PostListing
        imageSources={{
          mobileImage: data.zwk4_mobileImage,
          desktopImage: data.zwk4_desktopImage,
          largeDesktopImage: data.zwk4_largeDesktopImage,
        }}
        title="The Gatsby Migration, pt.3 - Smart Pages"
        date="15 March 2020"
        description="Adding dynamic pages to a Gatsby site"
        link="/blog/2020/15-03/gatsby-migration-3"
      />
      <PostListing
        imageSources={{
          mobileImage: data.zwk3_mobileImage,
          desktopImage: data.zwk3_desktopImage,
          largeDesktopImage: data.zwk3_largeDesktopImage,
        }}
        title="The Gatsby Migration, pt.2 - Dumb Pages"
        date="01 February 2020"
        description="Transforming a React site into a statically rendered one? Let's get started"
        link="/blog/2020/01-02/gatsby-migration-2"
        textAlignRight
      />
      <PostListing
        imageSources={{
          mobileImage: data.zwk2_mobileImage,
          desktopImage: data.zwk2_desktopImage,
          largeDesktopImage: data.zwk2_largeDesktopImage,
        }}
        title="The Gatsby Migration, pt.1 - Setting the Scene"
        date="21 January 2020"
        description="Assembling a pretty standard React site, first step on the road to converting it to a Gatsby one"
        link="/blog/2020/21-01/gatsby-migration-1"
      />
      <PostListing
        imageSources={{
          mobileImage: data.mqtt_mobileImage,
          desktopImage: data.mqtt_desktopImage,
          largeDesktopImage: data.mqtt_largeDesktopImage,
        }}
        title="Real-time Communication with MQTT"
        date="12 November 2019"
        description="MQTT and real-time communication with the browser, JavaScript, Web Sockets and a Mosquitto message broker"
        link="/blog/2019/12-11/rtc-with-mqtt"
        textAlignRight
      />
      <PostListing
        imageSources={{
          mobileImage: data.fsweb_mobileImage,
          desktopImage: data.fsweb_desktopImage,
          largeDesktopImage: data.fsweb_largeDesktopImage,
        }}
        title="Introduction to F# Web APIs"
        date="30 October 2019"
        description="The basics of building a Web API with .NET Core and F#"
        link="/blog/2019/30-10/fsharp-webapi"
      />
      <PostListing
        imageSources={{
          mobileImage: data.wild_mobileImage,
          desktopImage: data.wild_desktopImage,
          largeDesktopImage: data.wild_largeDesktopImage,
        }}
        title="Looky, a wild HTML!"
        date="13 October 2019"
        description="The first blog post, A quick journey through my design and development process"
        link="/blog/2019/12-10/looky-a-wild-html"
        textAlignRight
      />
      <PostListing
        imageSources={{
          mobileImage: data.zwk_mobileImage,
          desktopImage: data.zwk_desktopImage,
          largeDesktopImage: data.zwk_largeDesktopImage,
        }}
        title="Zwartkops Gallery"
        date="27 July 2019"
        image="/images/zwartkops/image12.jpgJuly 2019"
        description="A photo gallery of the Extreme Racing Festival at Zwartkops Raceway in Centurion"
        link="/gallery/zwartkops"
        linkText="View Gallery"
      />
    </ContentPage>
  </Layout>
)

export default Blog

export const query = graphql`
  {
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
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mqtt_largeDesktopImage: file(
      relativePath: { eq: "blog/2019/12-11/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
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

    wild_mobileImage: file(relativePath: { eq: "blog/2019/12-10/header.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wild_desktopImage: file(
      relativePath: { eq: "blog/2019/12-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wild_largeDesktopImage: file(
      relativePath: { eq: "blog/2019/12-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk_mobileImage: file(relativePath: { eq: "zwartkops/image12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk_desktopImage: file(relativePath: { eq: "zwartkops/image12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk_largeDesktopImage: file(relativePath: { eq: "zwartkops/image12.jpg" }) {
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
  }
`
