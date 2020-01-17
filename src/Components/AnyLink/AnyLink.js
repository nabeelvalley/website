import React from "react"
import { Link } from 'gatsby'

const AnyLink = ({ to, children }) =>
    to.match(/^http/)
        ? <a href={to} target="_blank" rel="noopener noreferrer">{children}</a>
        : <Link to={to}>{children}</Link>

export default AnyLink