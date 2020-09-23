import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import PostListing from '../Components/PostListing/PostListing'
import Layout from '../Layout'
import { graphql } from 'gatsby'
import Meta from '../Components/Meta/Meta'
import sortMarkdownPosts from '../../utils/sortMarkdownPosts'
import ProjectItem from '../Components/ProjectGroup/ProjectItem'
import ProjectGroup from '../Components/ProjectGroup/ProjectGroup'

const Blog = ({ location, data }) => {
  const imageSources = [
    {
      mobileImage: data.zwk4_mobileImage,
      desktopImage: data.zwk4_desktopImage,
      largeDesktopImage: data.zwk4_largeDesktopImage,
    },
    {
      mobileImage: data.zwk3_mobileImage,
      desktopImage: data.zwk3_desktopImage,
      largeDesktopImage: data.zwk3_largeDesktopImage,
    },
    {
      mobileImage: data.zwk2_mobileImage,
      desktopImage: data.zwk2_desktopImage,
      largeDesktopImage: data.zwk2_largeDesktopImage,
    },
    {
      mobileImage: data.mqtt_mobileImage,
      desktopImage: data.mqtt_desktopImage,
      largeDesktopImage: data.mqtt_largeDesktopImage,
    },
    {
      mobileImage: data.fsweb_mobileImage,
      desktopImage: data.fsweb_desktopImage,
      largeDesktopImage: data.fsweb_largeDesktopImage,
    },
    {
      mobileImage: data.wild_mobileImage,
      desktopImage: data.wild_desktopImage,
      largeDesktopImage: data.wild_largeDesktopImage,
    },
    {
      mobileImage: data.zwk_mobileImage,
      desktopImage: data.zwk_desktopImage,
      largeDesktopImage: data.zwk_largeDesktopImage,
    },
  ]

  const sortedPosts = sortMarkdownPosts(data.allRenderedMarkdownPost)
    .map((p) => p.node)
    .reverse()

  const largePosts = sortedPosts.slice(0, imageSources.length)
  const smallPosts = sortedPosts.slice(imageSources.length)

  return (
    <Layout>
      <ContentPage
        location={location}
        title="Blog"
        subtitle="Rants and Ramblings"
      >
        <Meta
          title="Blog | Nabeel Valley"
          description="Rants and Ramblings. Random thoughts on Web Development, Photography, Design, and Life"
          image={
            data?.site?.siteMetadata?.siteUrl +
            data?.coverImage?.childImageSharp?.fluid?.src
          }
        />
        {largePosts.map((p, i) => (
          <PostListing
            key={i}
            imageSources={imageSources[i]}
            title={p.title}
            date={p.subtitle}
            description={p.description}
            link={p.slug}
            textAlignRight={i % 2 == 1}
          />
        ))}
        <ProjectGroup isFullWidth={false}>
          {smallPosts.map((p, i) => (
            <ProjectItem
              key={i}
              title={p.title}
              subtitle={p.subtitle}
              description={p.description}
              link={p.slug}
              linkText="Read More"
            />
          ))}
          <ProjectItem
            subtitle="27 july 2019"
            title="Zwartkops Gallery"
            image="/images/zwartkops/image12.jpgJuly 2019"
            description="A photo gallery of the Extreme Racing Festival at Zwartkops Raceway in Centurion"
            link="/gallery/zwartkops"
            linkText="Read More"
          />
        </ProjectGroup>
      </ContentPage>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }

    mqtt_mobileImage: file(
      relativePath: { eq: "content/blog/2019/12-11/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mqtt_desktopImage: file(
      relativePath: { eq: "content/blog/2019/12-11/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    mqtt_largeDesktopImage: file(
      relativePath: { eq: "content/blog/2019/12-11/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    fsweb_mobileImage: file(
      relativePath: { eq: "content/blog/2019/30-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fsweb_desktopImage: file(
      relativePath: { eq: "content/blog/2019/30-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fsweb_largeDesktopImage: file(
      relativePath: { eq: "content/blog/2019/30-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    wild_mobileImage: file(
      relativePath: { eq: "content/blog/2019/12-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wild_desktopImage: file(
      relativePath: { eq: "content/blog/2019/12-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    wild_largeDesktopImage: file(
      relativePath: { eq: "content/blog/2019/12-10/header.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk_mobileImage: file(
      relativePath: { eq: "images/zwartkops/image12.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk_desktopImage: file(
      relativePath: { eq: "images/zwartkops/image12.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk_largeDesktopImage: file(
      relativePath: { eq: "images/zwartkops/image12.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk2_mobileImage: file(
      relativePath: { eq: "images/zwartkops/image2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk2_desktopImage: file(
      relativePath: { eq: "images/zwartkops/image2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk2_largeDesktopImage: file(
      relativePath: { eq: "images/zwartkops/image2.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk3_mobileImage: file(
      relativePath: { eq: "images/zwartkops/image15.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk3_desktopImage: file(
      relativePath: { eq: "images/zwartkops/image15.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk3_largeDesktopImage: file(
      relativePath: { eq: "images/zwartkops/image15.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    zwk4_mobileImage: file(
      relativePath: { eq: "images/zwartkops/image11.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk4_desktopImage: file(
      relativePath: { eq: "images/zwartkops/image11.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    zwk4_largeDesktopImage: file(
      relativePath: { eq: "images/zwartkops/image11.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    coverImage: file(relativePath: { eq: "images/home/landing/landing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    allRenderedMarkdownPost(filter: { slug: { regex: "/^/blog/" } }) {
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
