import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import InfoBlock from '../Components/InfoBlock/InfoBlock'
import SectionDivider from '../Components/SectionDivider/SectionDivider'
import Layout from '../Layout'
import Meta from '../Components/Meta/Meta'
import { graphql } from 'gatsby'

const About = ({ location, data }) => (
  <Layout>
    <ContentPage
      location={location}
      title="About"
      subtitle="Software Developer, Student"
    >
      <Meta
        title="About Me | Nabeel Valley"
        description="A little bit about my work and education experiences"
        image={
          data?.site?.siteMetadata?.siteUrl +
          data?.coverImage?.childImageSharp?.fluid?.src
        }
      />

      <InfoBlock
        heading="Me"
        location="Pretoria, South Africa"
        date="'95"
        body="my name is nabeel valley, born in 1995 - pretoria, south africa\ni'm passionate about solving challenging problems in beautiful ways\nmy daily-doings involve writing code, graphic and ui design, taking pictures, and a bit of reading"
      />

      <SectionDivider title="Experience" />

      <InfoBlock
        heading="Quro Medical"
        location="Johannesburg, South Africa"
        description="Senior Software Engineer"
        date="May'21-present"
        body="developing web and mobile applications powered by scalable cloud native architectures and the internet of things"
        summaryAlignRight
      />

      <InfoBlock
        heading="Mercedes-Benz"
        location="Pretoria, South Africa"
        description="Web Developer / Technical Specialist"
        date="Mar'19-April'21"
        body="full stack web developer in the marketing/customer data analytics team focused on end-to-end delivery of software projects from the identification of business requirements to the application architecture and solution delivery. working on optimizing customer experiences on web platforms and integrating with a variety 1st and 3rd party applications and supporting with data related operations\nmaking use of agile methodologies and delivering software in a three tier, service-oriented architecture using primarily .net, node.js, react, and jenkins as well as machine learning applications with python and ml.net"
      />

      <InfoBlock
        heading="IBM"
        location="Johannesburg, South Africa"
        description="Cloud Developer Advocate"
        subtext="Graduate Program"
        date="Sept'18-Feb'19"
        body="focused on enabling developers on ibm cloud technologies, building poc applications and demos for prospective clients showcasing technologies such as artificial intelligence, internet of things, containers and microservices, devops tools and methodologies, blockchain and design thinking\nadditionally i also wrote an article on assembling a continious deployment pipeline for web applications and coordinated and assisted developers with the data science johannesburg meetup group and the mtn tad hack in 2018"
        summaryAlignRight
      />

      <InfoBlock
        heading="Microsoft"
        location="Johannesburg, South Africa"
        description="Full Stack Web Developer"
        subtext="Internship"
        date="Feb'18-Aug'18"
        body="development of mobile-first progressive web applications for a mentorship program using angular and asp.net core for azure called lifexchange, and the microsoft cloud summit 2018 event information site as well as engaged in client reviews and workshops as well as project planning. researched topics on web design and development"
      />

      <SectionDivider title="Education" />

      <InfoBlock
        heading="University of Pretoria"
        location="Pretoria, South Africa"
        description="BEng(Mech)"
        date="Jan'14-Dec'17"
        body="bachelor's degree in mechanical engineering with a final year specialization in mechatronics and a research project focused on renewable energy, i also tutored engineering programming in python to second year students"
        summaryAlignRight
      />

      <InfoBlock
        heading="Al Ghazali College"
        location="Pretoria, South Africa"
        description="National Senior Certificate"
        date="Dec'13"
        body="national senior certificate with mathematics, physical sciences, life sciences, and information technology along with english as my primary language and afrikaans as the second"
      />
    </ContentPage>
  </Layout>
)

export default About

export const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }

    coverImage: file(relativePath: { eq: "home/landing/landing.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
