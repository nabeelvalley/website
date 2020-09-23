import React from 'react'
import './Navbar.css'
import { Link } from 'gatsby'

const Navbar = () => (
  <nav className="Navbar">
    <div className="logo">
      <Link
        activeClassName="active"
        activeStyle={{ visibility: 'hidden', width: 0, height: 0 }}
        to="/"
      >
        Nabeel Valley
      </Link>
    </div>
    <ul className="linkGroup">
      <li className="link">
        <Link activeClassName="active" partiallyActive={false} to="/">
          Home
        </Link>
      </li>
      <li className="link">
        <Link activeClassName="active" partiallyActive={true} to="/blog">
          Blog
        </Link>
      </li>
      <li className="link">
        <Link activeClassName="active" partiallyActive={true} to="/stdout">
          Stdout
        </Link>
      </li>
      <li className="link">
        <Link activeClassName="active" partiallyActive={true} to="/docs">
          Docs
        </Link>
      </li>
      <li className="link">
        <Link activeClassName="active" partiallyActive={true} to="/code">
          Code
        </Link>
      </li>
      <li className="link">
        <Link activeClassName="active" partiallyActive={true} to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
