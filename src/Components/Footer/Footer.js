import React from 'react'
import AnyLink from '../AnyLink/AnyLink'
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
        <li className="link"><AnyLink to="/">Home</AnyLink></li>
        <li className="link"><AnyLink to="/blog">Blog</AnyLink></li>
        <li className="link"><AnyLink to="/code">Code</AnyLink></li>
        <li className="link"><AnyLink to="/about">About</AnyLink></li>
        <li className="link"><a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a></li>
    </ol>
</div>

export default Footer