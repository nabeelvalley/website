import React from 'react'
import Landing from '../Components/Landing/Landing';
import FeaturedPost from '../Components/FeaturedPost/FeaturedPost'
import SectionDivider from '../Components/SectionDivider/SectionDivider'

const Home = () => <div className="Home">
    <Landing />
    <FeaturedPost
        image="/images/posts/image1.jpg"
        title="blog post title"
        date="15 September 2019"
        synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
        link="/home"
    />
    <SectionDivider title="What's New?" />
</div>

export default Home