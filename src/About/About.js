import React from 'react'
import ContentPage from '../Components/ContentPage/ContentPage'
import PostListing from '../Components/PostListing/PostListing'
import InfoBlock from '../InfoBlock/InfoBlock'
import SectionDivider from '../Components/SectionDivider/SectionDivider'

const About = () => <ContentPage title="About" subtitle="Software Developer, Student">
    <InfoBlock
        heading="Me"
        location="Pretoria, South Africa"
        description="just a placeholder for now"
        date="'95"
        body="my name is nabeel valley, born in 1995 - pretoria, south africa\ni'm passionate about solving challenging problems in beautiful ways\nmy daily-doings involve writing code, graphic and ui design, taking pictures, and a bit of reading"
    />

    <SectionDivider title="Experience" />

    <InfoBlock
        heading="Me"
        location="Pretoria, South Africa"
        description="just a placeholder for now"
        date="'95"
        body="my name is nabeel valley, born in 1995 - pretoria, south africa\ni'm passionate about solving challenging problems in beautiful ways\nmy daily-doings involve writing code, graphic and ui design, taking pictures, and a bit of reading"
        summaryAlignRight={true}
    />

    <PostListing textAlignRight={true}
        link="/home"
        image="/images/posts/image1.jpg"
        title="blog post title"
        date="15 September 2019"
        synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
    />

    <PostListing
        image="/images/posts/image1.jpg"
        title="blog post title"
        date="15 September 2019"
        synops="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus mauris, vitae ultrices ipsum. Fusce eget massa lectus. Pellentesque non lorem."
        link="/home"
    />
</ContentPage>

export default About