import React from 'react'
import './Preloader.css'

const Preloader = ({ topHeight }) => (
    <div className="Preloader" style={{ margin: `calc(${topHeight || '50vh'} - 20px) auto` }}>
        {/* Preloader from https://tobiasahlin.com/spinkit/ */}
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
    </div>
)

export default Preloader