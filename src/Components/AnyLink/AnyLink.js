import React from "react";
import { NavLink } from 'react-router-dom'

const AnyLink = ({ to, children }) =>
    to.match(/^http/)
        ? <a href={to} target="_blank">{children}</a>
        : <NavLink to={to}>{children}</NavLink>

export default AnyLink