import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = ({ activeRoute }) => (
    <nav className="Navbar">
        <div className="logo" style={activeRoute === 'home' ? { visibility: 'hidden', width: 0, height: 0 } : {}}>Nabeel Valley</div>
        <ul className="linkGroup">
            {
                ['Home', 'Blog', 'Code', 'About']
                    .map(item =>
                        <li key={item} className="link">
                            <NavLink activeClassName="active" to={'/' + item.toLowerCase()}>{item}</NavLink>
                        </li>)
            }
        </ul>
    </nav>
)

export default Navbar