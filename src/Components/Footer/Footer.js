import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => <div className="Footer grid">
    <div className="logo">
        <div className="title">
            Nabeel Valley
        </div>
        <div className="subtitle">
            web developer, photographer
        </div>
    </div>
    <ol className="linkGroup">
        <li className="link"><NavLink to="/home">Home</NavLink></li>
        <li className="link"><NavLink to="/blog">Blog</NavLink></li>
        <li className="link"><NavLink to="/code">Code</NavLink></li>
        <li className="link"><NavLink to="/about">About</NavLink></li>
    </ol>
</div>

export default Footer