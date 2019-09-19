import React from 'react'
import './Navbar.css'
import { NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => (
    <nav className="Navbar">
        <div className="logo" style={props.location.pathname === '/home' ? { visibility: 'hidden', width: 0, height: 0 } : {}}>Nabeel Valley</div>
        <ul className="linkGroup">
            <li activeClassName="active" className="link"><NavLink to="/home">Home</NavLink></li>
            <li activeClassName="active" className="link"><NavLink to="/blog">Blog</NavLink></li>
            <li activeClassName="active" className="link"><NavLink to="/code">Code</NavLink></li>
            <li activeClassName="active" className="link"><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
)

export default withRouter(Navbar)