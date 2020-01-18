import breakpoints from "../../breakpoints"

export const getImageSources = ({ mobileImage, desktopImage, largeDesktopImage }) => [
    mobileImage.childImageSharp.fluid,
    {
        ...desktopImage.childImageSharp.fluid,
        media: `(min-width: ${breakpoints.small})`
    },
    {
        ...largeDesktopImage.childImageSharp.fluid,
        media: `(min-width: ${breakpoints.large})`
    }
]