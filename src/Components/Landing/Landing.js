import React from 'react'
import './Landing.css'

const Landing = () => <div className="Landing grid">
    <div className="text">
        <h1 className="logo">Nabeel<br />&nbsp;Valley</h1>
        <p className="subheading">web developer, photographer</p>
        <div className="icons">
            <a href="https://github.com/nabeelvalley"><img className="icon" src="/icons/github.svg" alt=""></img></a>
            <a href="https://www.instagram.com/nabeelvalley"><img className="icon" src="/icons/instagram.svg" alt=""></img></a>
            <a href="https://www.linkedin.com/in/nabeelvalley"><img className="icon" src="/icons/linkedin.svg" alt=""></img></a>
            {/* <a href="https://twitter.com/not_nabeel"><img className="icon" src="/icons/twitter.svg" alt=""></img></a> */}
        </div>
    </div>
    <img src="/images/home/landing/landing.jpg" alt="canoes in the ocean" className="image fill" />
</div>

export default Landing