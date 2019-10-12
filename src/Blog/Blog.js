import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import PostListing from '../Components/PostListing/PostListing'

const Blog = () => <ContentPage title="Blog" subtitle="Rants and Ramblings">
    <PostListing textAlignRight={true}
        image="/images/posts/image1.jpg"
        title="blog post title"
        date="15 September 2019"
        synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
        link="/home"
    />

    <PostListing
        image="/images/posts/image1.jpg"
        title="blog post title"
        date="15 September 2019"
        synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
        link="/home"
    />
</ContentPage>

export default Blog