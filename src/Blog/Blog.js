import React from 'react'
import { Helmet } from 'react-helmet'
import ContentPage from '../Components/ContentPage/ContentPage'
import PostListing from '../Components/PostListing/PostListing'

const Blog = () => <ContentPage title="Blog" subtitle="Rants and Ramblings">
    <Helmet>
        <title>Blog | Nabeel Valley</title>
        <meta name="description" content="Rants and Ramblings. Random thoughts on Web Development, Photography, Design, and Life" />
    </Helmet>
    <PostListing
        image="content/blog/2019/30-10/header.jpg"
        title="Intro to F# Web APIs"
        date="30 October 2019"
        description="The basics of building a Web API with .NET Core and F#"
        link="/blog/2019/30-10/fsharp-webapi"
    />
    <PostListing
        image="/content/blog/2019/12-10/header.jpg"
        title="Looky, a wild HTML!"
        date="13 October 2019"
        description="The first blog post, A quick journey through my design and development process"
        link="/blog/2019/12-10/looky-a-wild-html"
        textAlignRight
    />
    <PostListing
        image="/images/zwartkops/image12.jpg"
        title="Zwartkops Gallery"
        date="27 July 2019"
        description="A photo gallery of the Extreme Racing Festival at Zwartkops Raceway in Centurion"
        link="/gallery/zwartkops"
        linkText="View Gallery"
    />
</ContentPage>

export default Blog