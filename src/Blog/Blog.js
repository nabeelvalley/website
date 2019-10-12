import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import PostListing from '../Components/PostListing/PostListing'

const Blog = () => <ContentPage title="Blog" subtitle="Rants and Ramblings">
    <PostListing textAlignRight={true}
        image="/content/blog/2019/12-10/header.jpg"
        title="Looky, a wild HTML!"
        date="13 October 2019"
        synops="The first blog post, A quick journey through my design and development process"
        link="/blog/2019/12-10/looky-a-wild-html"
    />
</ContentPage>

export default Blog