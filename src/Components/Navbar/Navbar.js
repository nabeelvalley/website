import React from 'react'
import './Navbar.css'
import { Link } from 'gatsby'

const Navbar = (props) => (console.log(window.location.pathname) ||
    <nav className="Navbar">
        <div className="logo" style={window.location.pathname === '/home' ? { visibility: 'hidden', width: 0, height: 0 } : {}}><Link activeClassName="active" to="/home">Nabeel Valley</Link></div>
        <ul className="linkGroup">
            <li className="link"><Link activeClassName="active"
                partiallyActive={true} to="/home">Home</Link></li>
            <li className="link"><Link activeClassName="active"
                partiallyActive={true} to="/blog">Blog</Link></li>
            <li className="link"><Link activeClassName="active"
                partiallyActive={true} to="/code">Code</Link></li>
            <li className="link"><Link activeClassName="active"
                partiallyActive={true} to="/about">About</Link></li>
        </ul>
    </nav>
)

export default Navbar