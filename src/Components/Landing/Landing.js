import React from 'react'
import './Landing.css'

const Landing = () => <div className="Landing grid">
    <div className="text">
        <h1 className="logo">Nabeel<br />&nbsp;Valley</h1>
        <p className="subheading">web developer, photographer</p>
        <div className="icons">
            <div className="icon"></div>
            <div className="icon"></div>
            <div className="icon"></div>
        </div>
    </div>
    <img src="/images/home/landing/landing.jpg" alt="canoes in the ocean" className="image fill" />
</div>

export default Landing