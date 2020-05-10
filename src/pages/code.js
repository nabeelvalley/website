import React from "react"
import { Helmet } from "react-helmet"
import ContentPage from "../Components/ContentPage/ContentPage"
import ProjectGroup from "../Components/ProjectGroup/ProjectGroup"
import ProjectItem from "../Components/ProjectGroup/ProjectItem"
import SectionDivider from "../Components/SectionDivider/SectionDivider"
import PostListing from "../Components/PostListing/PostListing"
import Layout from "../Layout"
import { graphql } from "gatsby"
import Meta from "../Components/Meta/Meta"

const Code = ({ location, data }) => (
  <Layout>
    <ContentPage
      location={location}
      title="Code"
      subtitle="Endeavours in Monospace"
    >
      <Meta
        title="Code | Nabeel Valley"
        description="Projects I'm currently working on"
      />

      <PostListing
        imageSources={{
          mobileImage: data.mobileImage,
          desktopImage: data.desktopImage,
          largeDesktopImage: data.largeDesktopImage,
        }}
        title="Docs"
        date="From GitHub"
        description="Notes on software development, languages, frameworks, and technology"
        link="/docs"
      />

      <SectionDivider title="Projects" />

      <ProjectGroup isFullWidth={false}>
        <ProjectItem
          title="Rak'ah"
          tech={["svelte", "js", "netlify"]}
          description="Information on the number of Rak'ah for different Salaat. Essentially a fork of 'Form and Structure' with different content"
          link="https://rakah.netlify.com"
          linkText="Go to Site"
        />
        <ProjectItem
          title="Form and Structure"
          tech={["svelte", "js", "netlify"]}
          description="Website about Poetic Form and Structure built with Svelte, one of those 'always-a-work-in-progress' kind of things"
          link="https://formandstructure.netlify.com"
          linkText="Go to Site"
        />
        <ProjectItem
          title="Salaah Times"
          tech={["react", "strapi", "docker", "mongo-db"]}
          description="Web App to enable Masaajid to manage and publish their Salaah Times for a given area. Built with StrapiCMS, Mongo and React and an unnecessarily complicated Docker build"
          link="https://github.com/nabeelvalley/SalaahTimesApp"
          linkText="Go to GitHub"
        />
        <ProjectItem
          title="Twit List"
          tech={["node.js", "express", "twitter", "mongo-db"]}
          description="Application that allows you to bookmark Tweets and save them to your account simply by sharing that tweet with an app host user's account, works in tandem with the Webhooks Project"
          link="https://github.com/nabeelvalley/TwitList"
          linkText="Go to GitHub"
        />
        <ProjectItem
          title="Real-Time Communication with MQTT"
          tech={["JS", "MQTT", "WS", "Mosquitto"]}
          description="MQTT and real-time communication with the browser, JavaScript, Web Sockets and a Mosquitto message broker"
          link="https://github.com/nabeelvalley/RTCWithMQTT"
          linkText="Go to GitHub"
        />
        <ProjectItem
          title="Machine Learning Web Services"
          tech={["python", "machine learning", "docker", "cloud foundry"]}
          description="Get data and train a model to deploy as a web service on Cloud Foundry"
          link="https://developer.ibm.com/tutorials/deploy-a-python-machine-learning-model-as-a-web-service/"
          linkText="Go to Article"
        />
        <ProjectItem
          title="Angular Continuous Deployment"
          tech={["node.js", "angular", "ibm cloud", "cloud", "cloud foundry"]}
          description="Deploy an Angular app to Cloud Foundry with a Continuous Delivery Pipeline and Node.js custom builds"
          link="https://developer.ibm.com/tutorials/deploy-angular-apps-cloud-foundry-devops/"
          linkText="Go to Article"
        />
      </ProjectGroup>
    </ContentPage>
  </Layout>
)

export default Code

export const query = graphql`
  {
    mobileImage: file(relativePath: { eq: "pages/code.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 690, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    desktopImage: file(relativePath: { eq: "pages/code.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    largeDesktopImage: file(relativePath: { eq: "pages/code.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
