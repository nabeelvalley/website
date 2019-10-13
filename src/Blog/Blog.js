import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import PostListing from '../Components/PostListing/PostListing'

const Blog = () => <ContentPage title="Blog" subtitle="Rants and Ramblings">
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