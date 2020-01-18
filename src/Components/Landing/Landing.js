import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { buildImageQuery, getImageSources } from "../Helpers/imageQueryBuilder"

import './Landing.css'

const Landing = () => {
    const data = useStaticQuery(
        graphql`
        {
            mobileImage: file(relativePath: {eq: "home/landing/landing.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 690, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            desktopImage: file(relativePath: {eq: "home/landing/landing.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1080, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            largeDesktopImage: file(relativePath: {eq: "home/landing/landing.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1200, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
        `
    )

    const sources = getImageSources(data)

    return <div className="Landing grid">
        <div className="text">
            <h1 className="logo">Nabeel<br />&nbsp;Valley</h1>
            <p className="subheading">Web Developer, Photographer</p>
            <SocialIcons />
        </div>
        <Img fluid={sources} className="image fill" />
    </div>
}

export default Landing