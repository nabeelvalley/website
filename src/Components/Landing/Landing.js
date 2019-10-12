import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'

import './Landing.css'

const Landing = () => <div className="Landing grid">
    <div className="text">
        <h1 className="logo">Nabeel<br />&nbsp;Valley</h1>
        <p className="subheading">Web Developer, Photographer</p>
        <SocialIcons />
    </div>
    <img src="/images/home/landing/landing.jpg" alt="canoes in the ocean" className="image fill" />
</div>

export default Landing