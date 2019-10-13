import React from 'react'
import './Preloader.css'

const Preloader = ({ topHeight }) => (
    <div className="Preloader" style={{ margin: `calc(${topHeight || '50vh'} - 20px) auto` }}>
        {/* Preloader from https://tobiasahlin.com/spinkit/ */}
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
    </div>
)

export default Preloader